import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable image optimization for local images
    unoptimized: false,
    // Define allowed image formats
    formats: ["image/avif", "image/webp"],
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
