import * as argon from 'argon2'
import { Injectable } from '@nestjs/common'

import { Hasher } from '@core/Domain/Hasher/Hasher'

@Injectable()
export class ArgonHasher implements Hasher {
  async hash(item: string): Promise<string> {
    const hashed = await argon.hash(item)
    return hashed
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    try {
      const result = await argon.verify(hashed, plain)
      if (!result) {
        return false
      }

      return true
    } catch (error) {
      console.log(error)
    }
  }
}