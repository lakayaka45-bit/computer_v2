import prisma from "@/utils/db";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { registrationSchema } from "@/utils/schema";
import { sanitizeInput, commonValidations } from "@/utils/validation";
import { handleApiError, AppError } from "@/utils/errorHandler";

const generateVerificationCode = () => Math.floor(100000 + Math.random() * 900000).toString();

export const POST = async (request: Request) => {
  try {
    const clientIP = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    if (!commonValidations.checkRateLimit(clientIP, 5, 15 * 60 * 1000)) {
      throw new AppError("Too many registration attempts. Please try again later.", 429);
    }

    const body = await sanitizeInput.validateJsonInput(request);
    const validationResult = registrationSchema.safeParse(body);

    if (!validationResult.success) {
      throw validationResult.error;
    }

    const { email, password } = validationResult.data;

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
      throw new AppError("Email is already in use", 400);
    }

    const verificationCode = generateVerificationCode();
    const hashedPassword = await bcrypt.hash(password, 14);

    await prisma.user.create({
      data: {
        id: nanoid(),
        email,
        password: hashedPassword,
        role: "user",
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Verification code created. Please confirm your email to finish registration.",
        verificationCode,
        email,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return handleApiError(error);
  }
};
