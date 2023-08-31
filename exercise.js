// panjang = 10, lebar = 5

// const rectangleLength = 10;
// const rectangleWidth = 5;
// const rectangleArea = rectangleLength * rectangleWidth;
// const perimeter = 2 * (rectangleLength + rectangleWidth);

// console.log("Luas = panjang * lebar")
// console.log(`${rectangleLength} * ${rectangleWidth} = ${rectangleArea}`)

// console.log("Keliling = 2*(panjang+lebar)")
// console.log(`2 * ${rectangleWidth} + ${rectangleLength} = ${perimeter}`)

// const radius = 6
// const diameter = 2 * radius
// const circumference = Math.PI * 2 * radius
// const areaCircle = Math.PI * radius * radius

// console.log("diameter= 2 * jari jari")
// console.log(`2 * ${radius} = ${diameter}`)

// console.log("Keliling Lingkaran = 2*phi* jari jari")
// console.log(`2 * Math.PI * ${radius} = ${circumference}`)

// console.log("Luas lingkaran = PI * radius * radius")
// console.log(`Math.PI * ${radius} * ${radius} = ${areaCircle}`)

// const sudut1 = 30
// const sudut2 = 20
// const sudut3 = 180 - sudut1-sudut2

// console.log(`180 - ${sudut1} - ${sudut2} = ${sudut3}`)

// soal no 5
const date1 = new Date("01/01/2024")
const date2 = new Date()
const date1inMs = date1.getTime()
const date2inMs = date2.getTime()
const Diff = date1inMs - date2inMs
const adayinMs = 24 * 60 * 60 * 1000
const daysDiff = Math.round(Diff / adayinMs)
console.log(`${daysDiff} hari menuju tahun baru`)

//soal no 6
let tahun = Math.floor(daysDiff / 365)
let sisa = daysDiff % 365
let bulan = Math.floor(sisa/30)
let hari = sisa % 30

console.log(`${tahun} tahun, ${bulan} bulan dan ${hari} hari`)






