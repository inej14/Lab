//1
function pipe(...fns) {
  if (!fns.every((fn) => typeof fn === "function")) {
    throw new Error("Error");
  }

  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

try {
  const h = pipe(inc, 7, cube);
} catch (error) {
  console.error(error.message);
}

//2

function compose(...fns) {
  const list = [];
  const on = (event, callback) => {
    if (event === "error") list.push(callback);
  };

  const Function = function (x) {
    try {
      return fns.reduceRight((acc, fn) => {
        if (typeof fn !== "function") {
          throw new Error("Error");
        }
        return fn(acc);
      }, x);
    } catch (error) {
      list.forEach((listener) => listener(error));
      return undefined;
    }
  };

  Function.on = on;
  return Function;
}

const f2 = compose(cube, twice, inc);

f2.on("error", (e) => console.error(`${e.message}`));

console.log(f2(2));

const g = compose(cube, 7, inc);
g.on("error", (e) => console.error(`${e.message}`));
console.log(g(2));
