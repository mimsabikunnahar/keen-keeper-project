/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  }
};
// https://randomuser.me/api/portraits/men/32.jpg
export default nextConfig;


