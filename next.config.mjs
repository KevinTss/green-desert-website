/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/green-desert-website",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
