import { Sortable } from './sortable.interface';

export class NumbersCollection implements Sortable {
  private readonly data: number[];

  constructor(data: number[]) {
    this.data = [...data];
  }

  get value(): number[] {
    return [...this.data];
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const tmp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = tmp;
  }
}
