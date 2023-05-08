/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orders/draft/",
        permanent: true,
      },
      {
        source: "/orders",
        destination: "/orders/draft/",
        permanent: true,
      },
    ];
  },
};
