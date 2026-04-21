export abstract class Entity<T> {
  protected readonly _id: T;
  constructor(id: T) { this._id = id; }
}