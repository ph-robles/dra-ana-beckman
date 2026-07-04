import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Adicione aqui os domínios de imagens remotas conforme forem definidos
      // (ex.: Supabase Storage, CDN de fotos da clínica)
    ],
  },
  compress: true,
};

export default nextConfig;
