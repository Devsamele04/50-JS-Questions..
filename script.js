// first 10 question ---------

console.error("dummy error");
console.warn("dummy warn");
console.log("hello", "kyu dhek rha Amonnnn");

console.log(45 * 2 - 10);

const newdate = new Date();
console.log(newdate.getFullYear());

var first = "Aman";
var last = "Bro";
console.log(first + " " + last);

var a = 12;
console.log(a);
a = 32;
console.log(a);

console.log(12 * 12);

var a = true;
console.log(typeof a);

var a = 23;
if (a > 18) console.log(true);
else console.log(false);

console.log(100 / 0);

// second 10 question --------

let b = 1000;
console.log(b);

const pi = Math.PI;
console.log(pi);

let c = 34;
c = 35;
console.log(c);

console.log(typeof null);

var aa = "23";
console.log(typeof aa);

var x = true;
console.log(typeof x);

let p = "hey",
  q = 13,
  r = "true";
console.log(p, q, r);

let d;
console.log(typeof d);

var ee = undefined;
console.log(typeof ee);

// const arr = [1, 3, 4];
// arr.push(45);
// console.log(arr);

// third 10 questions ---------

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

a = 1;
while (a <= 3) {
  console.log(a);
  a++;
}

// let str = "javascript";
// for (let hui of str) {
//   console.log(hui);
// }

for (i = 1; i < 21; i++) {
  if (i % 2 == 0) {
  } else {
    console.log(i);
  }
}

var t = 5;
do {
  console.log(t);
  t--;
} while (t > 0);

let fact = 1;
for (let i = 5; i > 0; i--) {
  fact = fact * i;
}
console.log(fact);

var hold = 1;
for (var i = 1; i < 4; i++) {
  var str = " ";
  for (var j = 1; j < 4; j++) {
    str += `${hold} `;
    hold++;
  }
  console.log(str);
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < Math.floor(arr.length / 2); i++) {
  var temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - i - 1] = temp;
}
console.log(arr);

let num = 1;
while (num < 51) {
  if (num % 5 == 0) console.log(num);
  num++;
}

var obj = {
  name: "dev",
  email: "d@gmail.com",
  age: 20,
};
for (let key in obj) {
  console.log(key);
}
 
// fourth 10 questions ---------

var arr = ["A", "B", "C"];
arr.forEach(function (value) {
  console.log(value);
});

var arr = ["aman", "dev", "kp"];
console.log(arr[2]);

var arr = [1, 3, 6];
arr.unshift(0);
arr.unshift(-1);
console.log(arr);

var arr = [1, 2, 3, 50];
arr.pop();
console.log(arr);

var arr = [1, 2, 3, 50];
console.log(arr.slice(0, 2));

var arr = [1, 2, 3, 50];
console.log(arr.indexOf(3));

var arr = ["aman", "dev", "kp", "siraj"];
console.log(arr.includes("dev"));

var arr = [1, 3, 6];
var arr2 = [4, 5, 6, 8, 7];
console.log(arr.concat(arr2));

var arr = [14, 35, 56, 8, 7];
for (var j = 0; j < arr.length; j++) {
  for (var i = 0; i < arr.length - j - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
}
console.log(arr);

var arr = [14, 35, 56, 8, 7];
var arr2 = [];

arr.forEach(function (value) {
  arr2.push(value);
});
arr2.pop();
console.log(arr, arr2);

// fifth 10 questions ------

function evod(value) {
  if (value % 2 == 0) return "even";
  else return "odd";
}
console.log(evod(13));

function area(r) {
  return Math.floor(Math.PI * r * r);
}
console.log(area(12));

function sumkaro(arr) {
  var sum = 0;
  arr.forEach(function (v) {
    sum = sum + v;
  });
  return sum;
}
console.log(sumkaro([2, 4, 4, 5]));

function checker(str, char) {
  return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checker("sarthak", "s"));

function max(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  else return "equal";
}

console.log(max(10, 10));

function getfact(num) {
  let fct = 1;
  for (var i = 1; i <= num; i++) {
    fct = fct * i;
  }
  return fct;
}
console.log(getfact(5));

function abcd(value) {
  return value.split("").reverse().join("");
}
console.log(abcd("adkaam"));

function abcd(arr) {
  var max = 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  return arr[max];
}
console.log(abcd([2, 3, 60, 70, 50, 49, 34, 1, 4]));

function kebab(str) {
  // return str.split(' ').join('-');
  return str.replaceAll(" ", "_");
}
console.log(kebab("hello ji to kese he aap log"));

function byy() {
  console.log("hello world byyy byyy");
}
byy();
byy();
