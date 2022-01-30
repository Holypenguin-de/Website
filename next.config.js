// Redirect / to /home
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true
      }
    ];
  },
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3308',
    'MYSQL_DB': 'holypenguin',
    'MYSQL_USER': 'holypenguin',
    'MYSQL_PASSWORD': '123holypenguin!',
    'JWT_SECURE_STRING': ')H@McQfTjWnZr4u7x!A%C*F-JaNdRgUk'
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  }
}
