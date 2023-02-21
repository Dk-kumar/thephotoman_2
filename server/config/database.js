module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'photo_man_v2'),
      user: env('DATABASE_USERNAME', 'magento'),
      password: env('DATABASE_PASSWORD', 'magento'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
