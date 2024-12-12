//1
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2
function generateKey(length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = random(0, characters.length - 1);
    key += characters[randomIndex];
  }
  return key;
}
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//3
function ipToNumber(ip = "127.0.0.1") {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
}

//4
function introspectObject(iface) {
  return Object.keys(iface)
    .filter((key) => typeof iface[key] === "function")
    .map((key) => [key, iface[key].length]);
}

const Iface = {
  fn1: (a, b) => a + b,
  fn2: (a) => a * 2,
  prop1: 56,
  prop2: "Hi",
};
