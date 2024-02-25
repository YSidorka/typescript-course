import { NumbersCollection } from './NumbersCollection';
import { CharCollection } from './CharCollection';
import { LinkedList } from './LinkedList';

const linkList = new LinkedList();

linkList.add(100);
linkList.add(5);
linkList.add(-5);
linkList.add(0);
linkList.add(1);

linkList.sort();
linkList.print();

let numColl = new NumbersCollection([100, 5, -5, 0, 1]);
numColl.sort();
console.log(numColl.value);

let charColl = new CharCollection(';lkjhgfdsertyhgvb');
charColl.sort();
console.log(charColl.value);
