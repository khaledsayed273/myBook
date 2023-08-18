/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "books-test-eight.vercel.app",
                port: "",
                pathname: "/**",
            },
        ],
    }
}

module.exports = nextConfig
