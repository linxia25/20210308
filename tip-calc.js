const arguments = process.argv.slice(2);

const billTotal = arguments[0];
const tipRate = arguments[1];


const tipAmount = parseInt(billTotal) * parseInt(tipRate) / 100;

console.log(`${tipRate}% of ${billTotal}: $${tipAmount}`);