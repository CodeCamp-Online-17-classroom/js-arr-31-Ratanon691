const array1 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
function decimal(num){
  return num = num.toFixed(2)
}
let result1 = array1.map(decimal)

const array2 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const monthAbbreviations = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]
const result2 = array2.map(number => monthAbbreviations[number])


const array3 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
let result3 = array3.map(num => Math.pow(num,1/4))
