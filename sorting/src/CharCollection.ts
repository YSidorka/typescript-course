import { Sorter } from './Sorter';

export class CharCollection extends Sorter {
  private readonly data: string[];

  constructor(data: string) {
    super();
    this.data = [...data];
  }

  get value(): string {
    return this.data.join('');
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tmp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = tmp;
  }
}
