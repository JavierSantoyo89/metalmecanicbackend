import dotenv from 'dotenv';
dotenv.config();

export const config = {
    PORT: process.env.PORT || 1689,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: process.env.DB_PORT,
    DB_DIALECT: process.env.DB_DIALECT,
    JWT_SECRET: process.env.JWT_SECRET || 'defaultsecret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
};  