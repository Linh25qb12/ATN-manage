/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://linh25qb:linh514593@atn.hhzcfzj.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
