import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { CommonModule } from '@core/common.module'

import { PostgresUserRepository } from '@modules/User/Infrastructure/Persistence/TypeORM/PostgresUserRepository'
import { UserAssembler } from '@modules/User/Infrastructure/Persistence/Assembler/UserAssembler'
import { UserUpdatePasswordController } from '@modules/User/Infrastructure/Controllers/V1/UserUpdatePasswordController'
import { UserCreateController } from '@modules/User/Infrastructure/Controllers/V1/UserCreateController'
import { UserEraseController } from '@modules/User/Infrastructure/Controllers/V1/UserEraseController'
import { UserListController } from '@modules/User/Infrastructure/Controllers/V1/UserListController'
import { UserReadController } from '@modules/User/Infrastructure/Controllers/V1/UserReadController'
import { UserUpdateController } from '@modules/User/Infrastructure/Controllers/V1/UserUpdateController'
import { UserSchema } from '@modules/User/Infrastructure/Persistence/TypeORM/Mapping/UserSchema'

import { UserCreate } from '@modules/User/Application/Creator/UserCreate'
import { UserErase } from '@modules/User/Application/Eraser/UserErase'
import { UserList } from '@modules/User/Application/Lister/UserList'
import { UserPasswordUpdate } from '@modules/User/Application/PasswordUpdater/UserPasswordUpdate'
import { UserRead } from '@modules/User/Application/Reader/UserRead'
import { UserUpdate } from '@modules/User/Application/Updater/UserUpdate'

import { UserAssembler as IUserAssembler } from '@modules/User/Domain/Assembler/UserAssembler'
import { UserRepository } from '@modules/User/Domain/UserRepository'

@Module({
  imports: [ 
    CommonModule,
    TypeOrmModule.forFeature([ UserSchema ])
  ],
  controllers: [
    UserCreateController,
    UserEraseController,
    UserListController,
    UserReadController,
    UserUpdateController,
    UserUpdatePasswordController
  ],
  providers: [
    UserCreate,
    UserErase,
    UserList,
    UserPasswordUpdate,
    UserRead,
    UserUpdate,
    { provide: IUserAssembler, useClass: UserAssembler },
    { provide: UserRepository, useClass: PostgresUserRepository }
  ],
  exports: []
})
export class UserModule {}