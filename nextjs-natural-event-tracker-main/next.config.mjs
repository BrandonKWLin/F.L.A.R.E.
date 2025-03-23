/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['leaflet', 'react-leaflet'],
    swcMinify: true,
    experimental: {
      esmExternals: 'loose'
    }
  };
  
  export default nextConfig;