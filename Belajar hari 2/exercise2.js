// mengetahui genap atau ganjil
let num = 10;
let x = num % 2;

if (x == 0) {
    console.log(num + " adalah genap");
}else {
    console.log(num + " adalah ganjil");
}

// celcius to fahrenheit
const celcius = 30
const fahrenheit = ((celcius * 9/5) + 32)

console.log(celcius + " derajat celcius sama dengan " + fahrenheit + " fahrenheit")

cek bilangan prima

let n = 10;
let hasil = "";

// Prima menyatakan true
let Prima = true;

// bilangan prima terkecil adalah 2,maka 1 bukan bilangan prima
if (n < 2) {
  Prima = false;
}
// Loop 
for (let i = 2; i * i <= n; i++) {
  if (n % i == 0) {
    Prima = false;
    break;
  }
}

if (Prima) {
  hasil = n + " adalah bilangan prima";
} else {
  hasil = n + " adalah bukan bilangan prima";
}

console.log(hasil)

let number = 2
let divider = 0

for (let i = 1; i<= number; i++) {
    if (number% i === 0) {
        divider++
    }
}

console.log(`${number} ${divider === 2? 'is' : 'is not'} prime number`)

Sum 1 sampai -N

let num = 5
let sum = 1
let desc = "1"

for (let i = 2; i <= num ; i++) {
    desc += ` + ${i}`
    sum += i
}
console.log(`${num} -> ${desc} = ${sum}`)

faktorial

let number = 10
let fact = 1
let describe = number

for( let i = number; i > 1; i--) {
   describe += ` X ${i - 1}`
   fact *= i
}
console.log("faktorial " + `${number} -> ${describe} = ${fact}`)

//fibonacci
let n = 10
let n1 = 0
let n2 = 1
let desc = ""

for (let i= 1; i <= n; i++) {
    desc += `${n1} `
    let n3 = n2 + n1
    n1 = n2;
    n2 = n3; 
}

console.log(`${n} -> ${desc}`)