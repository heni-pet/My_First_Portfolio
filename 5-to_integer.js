const arg = process.argv[2];
const num = Number(arg);

if (!isNaN(num) && arg !== undefined && arg.trim() !== '') {
  console.log('My number: ' + num);
} else {
  console.log('Not a number');
}