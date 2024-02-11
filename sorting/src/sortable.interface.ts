export interface Sortable {
  length: number;
  swap(i: number, j: number): void;
  compare(i: number, j: number): boolean;
}
