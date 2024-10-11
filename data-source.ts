import * as dotenv from 'dotenv'
import * as glob from 'glob'
import { DataSource, DataSourceOptions, EntitySchema } from 'typeorm'

dotenv.config()

const entityFiles = glob.sync('dist/src/modules/**/*Mapping/*.js', { ignore: ['**/Embeddeds/**'] });
const entities: any = entityFiles.flatMap((file) => {
  try {
    const module = require(`/srv/app/core/${file}`)
    return Object.values(module).filter((exported) => exported instanceof EntitySchema);
  } catch (error) {
    return []
  }
})

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 5432,
  database: process.env.DATABASE_NAME || 'postgres',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || '',
  synchronize: true,
  migrationsRun: true,
  logging: false,
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  entities: entities
}

const dataSource = new DataSource(config)
export default dataSource