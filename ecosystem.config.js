module.exports = {
  apps: [
    {
      name: 'Simple REST API',
      script: 'dist/src/main.js',
      watch: '.',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
