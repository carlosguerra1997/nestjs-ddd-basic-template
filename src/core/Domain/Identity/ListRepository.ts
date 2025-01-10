import { ListQuery } from '@core/Domain/Identity/List/ListQuery'
import { StoredRepository } from '@core/Domain/Identity/StoredRepository'

export interface ListRepository<T> extends StoredRepository<T> {
  obtainById(id: string): Promise<T>
  obtainByQuery(query?: ListQuery): Promise<T[]>
}