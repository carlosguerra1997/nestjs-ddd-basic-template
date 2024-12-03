import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

import { ZodSchema } from 'zod'

@Injectable()
export class ValidationGuard implements CanActivate {
  constructor(private readonly schema: ZodSchema) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest()
    const payload = request.body

    try {
      this.schema.parse(payload)
      return true
    } catch (error) {
      throw new BadRequestException()
    }
  }
}