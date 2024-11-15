import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import config from '@config/index'
import { Configuration } from '@config/Configuration'

import { ArgonHasher } from '@core/Infrastructure/Utils/ArgonHasher'
import { CrpyptoIdGenerator } from '@core/Infrastructure/Utils/CryptoIdGenerator'

import { Hasher } from '@core/Domain/Hasher/Hasher'
import { IdGenerator } from '@core/Domain/Identity/IdGenerator'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService<Configuration>) => config.get('database'),
      inject: [ConfigService]
    })
  ],
  providers: [
    { provide: Hasher, useClass: ArgonHasher },
    { provide: IdGenerator, useClass: CrpyptoIdGenerator }
  ],
  exports: [ 
    Hasher,
    IdGenerator
  ]
})
export class CommonModule {}