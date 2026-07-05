import { CategoryMenu, Hero, Incentives, IntroducingSection, Newsletter, ProductsSection } from "@/components";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroducingSection />
      <Incentives />
      <CategoryMenu />
      <ProductsSection />
      <TestimonialsSection />
      <Newsletter />
    </>
  );
}
