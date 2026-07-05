// *********************
// Role of the component: Bulk upload products page for admin dashboard
// Clean dark-themed version preserving upload handlers and history
// *********************

"use client";
import { DashboardSidebar } from "@/components";
import BulkUploadHistory from "@/components/BulkUploadHistory";
import apiClient from "@/lib/api";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  FaFileUpload,
  FaDownload,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

interface UploadResult {
  success: boolean;
  message: string;
  details?: {
    processed: number;
    successful: number;
    failed: number;
    errors?: string[];
  };
}

const BulkUploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type === "text/csv" || droppedFile.name.endsWith(".csv")) {
        setFile(droppedFile);
        setUploadResult(null);
      } else {
        toast.error("Please upload a CSV file");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "text/csv" || selectedFile.name.endsWith(".csv")) {
        setFile(selectedFile);
        setUploadResult(null);
      } else {
        toast.error("Please upload a CSV file");
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a CSV file first");
      return;
    }

    setUploading(true);
    setUploadResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await apiClient.post("/api/bulk-upload", formData);
      const data = await response.json();

      if (response.ok) {
        setUploadResult({
          success: true,
          message: data.message || "Products uploaded successfully!",
          details: data.details,
        });
        toast.success("Bulk upload completed!");
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setUploadResult({
          success: false,
          message: data.error || "Upload failed",
          details: data.details,
        });
        toast.error(data.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setUploadResult({ success: false, message: "Network error occurred during upload" });
      toast.error("Network error occurred");
    } finally {
      setUploading(false);
    }
  };

  const downloadTemplate = () => {
    const csvContent = `title,price,manufacturer,inStock,mainImage,description,slug,categoryId
Sample Product,99.99,Sample Manufacturer,10,https://example.com/image.jpg,Sample description,sample-product,category-uuid
Another Product,149.99,Another Manufacturer,5,https://example.com/image2.jpg,Another description,another-product,category-uuid`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "product-template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    toast.success("Template downloaded!");
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#0b1220_0%,#0f172a_100%)] text-white">
      <div className="flex max-w-screen-2xl mx-auto h-full max-xl:flex-col">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <div className="rounded-[1.5rem] bg-[#0b1220]/60 border border-white/10 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold">Bulk Upload Products</h1>
              <div>
                <button onClick={downloadTemplate} className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  <FaDownload /> Download CSV Template
                </button>
              </div>
            </div>

            <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive ? "border-blue-500 bg-white/5" : "border-white/10 bg-white/3"}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
              <FaFileUpload className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-lg mb-2">{file ? <span className="font-semibold">Selected: {file.name} ({(file.size/1024).toFixed(2)} KB)</span> : "Drag and drop CSV file here, or click to select"}</p>
              <input ref={fileInputRef} type="file" accept=".csv" onChange={handleFileChange} className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">Select CSV File</label>
            </div>

            {file && (
              <div className="flex justify-end">
                <button onClick={handleUpload} disabled={uploading} className={`py-3 px-6 rounded-lg font-bold text-white ${uploading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
                  {uploading ? "Uploading..." : "Upload Products"}
                </button>
              </div>
            )}

            {uploadResult && (
              <div className={`${uploadResult.success ? "bg-green-900/10 border-green-500" : "bg-red-900/10 border-red-500"} border-l-4 p-4 rounded`}> 
                <div className="flex items-start gap-4">
                  {uploadResult.success ? <FaCheckCircle className="text-3xl text-green-400" /> : <FaTimesCircle className="text-3xl text-red-400" />}
                  <div>
                    <h3 className="text-lg font-semibold">{uploadResult.success ? "Upload Successful" : "Upload Failed"}</h3>
                    <p className="mt-1 text-sm">{uploadResult.message}</p>
                    {uploadResult.details && (
                      <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{uploadResult.details.processed}</p>
                          <p>Processed</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-300">{uploadResult.details.successful}</p>
                          <p>Successful</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-red-300">{uploadResult.details.failed}</p>
                          <p>Failed</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4">
              <BulkUploadHistory />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BulkUploadPage;
