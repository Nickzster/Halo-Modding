export class UpdateFeed {
  page: number;
  queries: string;
  constructor(queries: string, page: number) {
    this.page = page;
    this.queries = queries;
    this.getPage.bind(this);
  }
  getPage() {
    this.page++;
    return this.page;
  }
  getQueryStrings() {
    return this.queries;
  }
  setQueryString(queries: string) {}
  fetchData() {}
}
