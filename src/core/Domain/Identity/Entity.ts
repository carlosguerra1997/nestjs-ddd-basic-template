export class Entity {
  private id: string
  private createdAt: string
  private updatedAt: string

  constructor(id: string) {
    this.id = id
  }

  public getId(): string {
    return this.id
  }
}