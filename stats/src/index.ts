import { readFileSync } from 'fs';

const data = readFileSync('./football.csv', { encoding: 'utf8'})
    .split('\n')
    .map((row) => row.split(','));


let countManUnited = 0;
for (let match of data) {
  if (match[1] === 'Man United' && match[5] === 'H') countManUnited += 1;
  if (match[2] === 'Man United' && match[5] === 'A') countManUnited += 1;
}

console.log(countManUnited);
