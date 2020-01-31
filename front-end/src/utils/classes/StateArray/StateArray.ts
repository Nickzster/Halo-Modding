export default class StateArray<T> {
  private data: Array<T>;
  constructor(init: T) {
    this.data = new Array<T>(init);
  }
  public push(newElem: T): void {
    this.data.push(newElem);
  }
  public remove(index: number): Array<T> {
    this.data.splice(index, 1);
    return this.data;
  }
  public get(): Array<T> {
    return this.data;
  }
}
