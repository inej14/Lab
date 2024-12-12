//Ідентифікатори
let name = "Yevheniia";
const year = 2007;
function hello(name) {
  console.log("Hello");
}
//Цикли
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function range1(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

//Функції
function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const avg = average(sq, cb);
    results.push(avg);
  }
  return results;
}

//Об'єкти

function fn() {
  const obj1 = { name: "object1" };
  let obj2 = { name: "object2" };
  obj1.name = "New object1";
  obj2.name = "New object2";
  obj2 = { name: "other object" };
  return { obj1, obj2 };
}

function createUser(name, city) {
  return { name, city };
}

//Колекції
const contacts = [
  { name: "Marcus", phone: "+380441111111" },
  { name: "Anne", phone: "+380123456789" },
  { name: "Mark", phone: "+380987654321" },
  { name: "Mary", phone: "+380123412345" },
];

function findPhoneByName(name) {
  for (const contact of contacts) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return "There is no such number";
}

const phonebook = {
  Jane: "+380445554433",
  Anne: "+380445554432",
  Ron: "+380445554431",
};

function findPhoneByName(name) {
  return phonebook[name] || "There is no such number";
}
