const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log('No argument');
} else if (args[1] === undefined) {
  console.log('HBNT');
} else {
  console.log('HBNT' + ' ' + 'cool');
}


