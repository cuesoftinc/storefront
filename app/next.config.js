/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// Configuration so as to be able to load images from www.course-api.com
const domain = "www.course-api.com";

module.exports = {
  images: {
    domains: [domain],
  },
};
