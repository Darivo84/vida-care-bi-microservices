module.exports = {
  apps: [
    {
      name: "vida-api-gateway",
      script: "dist/bundle.js",
      env: {
        PORT: 80,
        NODE_ENV: "production",
      },
    },
  ],
};
