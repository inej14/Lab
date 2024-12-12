//1.1
const inc1 = (x) => {
  return ++x;
};

const a = 7;
const b = inc1(a);
console.dir({ a, b });

//1.2
const inc2 = (num) => {
  num.n++;
};

const obj = { n: 10 };
inc2(obj);
console.dir(obj);

//2.1
const array = [true, 4, "hello",[], null, 0, false, 54, undefined, {}, "world", -2, !true, "name", 3, obj];
const table1 = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
};

for (const element of array) {
  const type = typeof element;

  if (type in table1) {
      table1[type]++;
  }
}

console.table(table1);
//2.2
const table2 = {};

for (const element of array) {
    const type = typeof element;

    if (!(type in table2)) {
        table2[type] = 0;
    }
    
    table2[type]++;
}

console.table(table2);
