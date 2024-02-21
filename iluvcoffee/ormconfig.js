module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'monari',
  password: 'secret',
  database: 'narie',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
