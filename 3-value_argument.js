const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log('No argument');
} else if (args[1] === undefined) {
  console.log('Argument found');
  console.log('Value:', args[0]);
} else {
  console.log('Arguments found');
  console.log('Values:');
  console.log(args[0]);
  console.log(args[1]);
  if (args[2] !== undefined) console.log('...and more');
}