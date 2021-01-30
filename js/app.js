

let n = [10, 4, 2, 5, 1, 3, 8, 9, 6, 7];
n.sort((a, b )=>  a - b);
console.log(n);



let isAnagram = (a, b) =>{
  a = a.toUpperCase().split("").sort().join(""),
  b = b.toUpperCase().split("").sort().join("");
  return a === b
}
console.log(
  isAnagram('luck', 'try')
)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

