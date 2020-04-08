import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: process.env.PGDBNAME || 'larcea',
  dialect: 'postgres',
  username: 'sqlite',
  password: process.env.PGPASSWORD || '12345montagneazertyatleastIhaveVodka',
  host: process.env.PGHOST || 'localhost',
});
