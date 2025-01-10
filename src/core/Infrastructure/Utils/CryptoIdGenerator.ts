import crypto from 'crypto'

import { IdGenerator } from '@core/Domain/Identity/IdGenerator';

export class CrpyptoIdGenerator implements IdGenerator {
  public generate(): string {
    return crypto.randomUUID()
  }
}