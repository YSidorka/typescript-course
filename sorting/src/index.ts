import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';

let sorter = new Sorter(new NumbersCollection([100, 5, -5, 0, 1]));
sorter.sort();
console.log(sorter.collection);
