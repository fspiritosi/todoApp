import Sequelize from 'sequelize';
const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;

// export const sequelize = new Sequelize(`${DB_NAME}, ${DB_USER}, ${DB_PASSWORD}`, {
//     dialect: 'postgres',
//     host: `${DB_HOST}`,
//     port: `${DB_PORT}` 
// })


export const sequelize = new Sequelize("TodoApp", "postgres", "Masha0911", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});
