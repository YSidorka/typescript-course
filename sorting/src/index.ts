import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

// let sorter = new Sorter(new NumbersCollection([100, 5, -5, 0, 1]));
// let sorter = new Sorter(new CharCollection(';lkjhgfdsertyhgvb'));
const list = new LinkedList();

list.add(100);
list.add(5);
list.add(-5);
list.add(0);
list.add(1);

let sorter = new Sorter(list);
sorter.sort();
console.log(sorter.collection);
