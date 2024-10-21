/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: '/api',
      },
    ]
  }
};

export default nextConfig;
