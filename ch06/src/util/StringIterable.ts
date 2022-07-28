export class StringIterable implements Iterable<string|undefined> {
  constructor(
    private strings: string[] = [],
    private currentIndex: number = 0
  ) {}
  [Symbol.iterator](): Iterator<string|undefined> {
    const that = this;
    let currentIndex = that.currentIndex,
      length = that.strings.length;

    const iterator: Iterator<string|undefined> = {
      next(): { value: string | undefined; done: boolean } {
        const value =
          currentIndex < length ? that.strings[currentIndex++] : undefined;
        const done = value == undefined;
        return { value, done };
      },
    };
    return iterator;
  }
}
