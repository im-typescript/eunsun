import { createRangeIterable, StringIterable, rangeGenerator } from "./util";

const iterator = createRangeIterable(1, 3 + 1);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

for (let value of new StringIterable(["hello", "world", "!"])) {
  console.log(value);
}

const iterator2 = rangeGenerator(1, 3 + 1);

while (1) {
  const { value, done } = iterator2.next();
  if (done) break;
  console.log(value);
}

for (let value of rangeGenerator(4, 6 + 1)) console.log(value);




import { gen12345 } from "./util";

for (let value of gen12345()) console.log(value);
