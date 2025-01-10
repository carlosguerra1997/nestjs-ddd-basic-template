export interface Configuration {
  env: string
  database: Database
}

interface Database {
  type: string
  host: string
  port: number
  username: string
  password: string
  database: string
  autoLoadEntities: boolean
  keepConnectionAlive: boolean
  logging: boolean
}