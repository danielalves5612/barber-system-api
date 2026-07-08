import dotenv from 'dotenv'
dotenv.config()

const configDatabase = {
    dialect: 'mariadb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    define: {
        timestamps: true,
        underscored: true,
    }
}

export default configDatabase