"use client";
import { useState } from "react";
import QRCode from "qrcode";

export default function Home() {
  const [link, setLink] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (!link.trim()) return;

    setIsGenerating(true);
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(link, {
        width: 256,
        margin: 2,
      });
      setQrCodeUrl(qrCodeDataUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCodeUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-8">
      <div className="w-full max-w-sm sm:max-w-lg p-4 sm:p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-2">
          QR Code Generator
        </h1>
        <p className="text-gray-400 text-center mb-6 sm:mb-8 text-xs sm:text-sm">
          Enter URL or text to generate QR code
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            className="w-full border border-gray-600 rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base text-white bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
          />
          <button
            className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            onClick={handleClick}
            disabled={!link.trim() || isGenerating}
          >
            {isGenerating ? "Generating..." : "Generate QR Code"}
          </button>
        </div>

        {qrCodeUrl && (
          <div className="flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-700 rounded-xl border border-gray-600">
            <div className="p-3 sm:p-4 bg-white rounded-xl shadow-lg w-full max-w-xs sm:max-w-none sm:w-auto flex justify-center">
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="rounded-lg w-full max-w-[200px] sm:max-w-none sm:w-auto h-auto"
              />
            </div>
            <button
              onClick={handleDownload}
              className="w-full px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
