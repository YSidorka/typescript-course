import { IAreaCountable } from './area-countable.interface';

console.log('Hello!');


class Square {
  public x: number;

  constructor(x: number) {
    this.x = x;
  }
}

class Circle {
  public r: number;

  constructor(r: number) {
    this.r = r;
  }
}

const square = new Square(5);
const circle = new Circle(5);


function area(obj: Square): number;
function area(obj: Circle): number;
function area(obj: any): number {
  if (obj instanceof Square) return obj.x**2;
  return Math.PI * obj.r**2;
}


console.log('Square:', area(square));
console.log('Circle:', area(circle));
