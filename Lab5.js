// 1
function seq(...args) {
  const funcs = [...args];
  function chain(next) {
    if (typeof next === "function") {
      funcs.push(next);
      return chain;
    } else {
      return funcs.reduce((acc, func) => func(acc), next);
    }
  }

  return chain;
}

//2
function array() {
  const Array = [];

  function arr(index) {
    return Array[index];
  }

  arr.push = function (value) {
    Array.push(value);
  };
  arr.pop = function () {
    return Array.pop();
  };
  return arr;
}
const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
