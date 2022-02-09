export class Page<T> {
  public totalCount: number;
  public page: number;
  public data: T[];

  public constructor(
    total: number,
    page: number,
    data: T[]
  ) {
    this.totalCount = total;
    this.page = page;
    this.data = data || [];
  }
}
