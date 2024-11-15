import * as fs from 'fs'
import { parse } from 'yaml'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule } from '@nestjs/swagger'

import { AppModule } from 'src/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: '*',
    methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  })

  const commonContent = fs.readFileSync('src/common/Infrastructure/Swagger/V1/BasicTemplate.yaml', 'utf-8');
  const userContent = fs.readFileSync('src/modules/User/Infrastructure/Swagger/V1/UserSwagger.yaml', 'utf-8');
  
  const v1Document = parse(commonContent)
  const userDocument = parse(userContent)

  const combinedDocument = {
    ...v1Document,
    ...userDocument
  }

  SwaggerModule.setup('v1/docs', app, combinedDocument);

  await app.listen(3000)
}

bootstrap()
