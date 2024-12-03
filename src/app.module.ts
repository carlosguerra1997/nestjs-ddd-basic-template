import { APP_FILTER } from '@nestjs/core'
import { Module } from '@nestjs/common'

import { DefaultController } from '@core/Infrastructure/Controllers/DefaultController'
import { FileLogger } from '@core/Infrastructure/Logger/FileLogger'
import { HttpExceptionFilter } from '@core/Infrastructure/Interceptors/HttpExceptionFilter'

import { Logger } from '@core/Domain/Logger/Logger'

import { CommonModule } from '@core/common.module'
import { UserModule } from '@modules/User/UserModule.module'

@Module({
  imports: [
    CommonModule,
    UserModule
  ],
  controllers: [
    DefaultController
  ],
  providers: [
    { provide: Logger, useClass: FileLogger },
    { provide: APP_FILTER, useClass: HttpExceptionFilter }
  ]
})
export class AppModule {}
