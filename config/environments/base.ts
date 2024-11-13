import { Configuration } from '@config/Configuration'

export const getBaseConfig = (): Configuration => ({
  env: '',
  database: {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || '',
    autoLoadEntities: true,
    keepConnectionAlive: true,
    logging: false
  }
})