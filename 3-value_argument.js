const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log('No argument');
} else if (args[1] === undefined) {
  console.log('HBNT');
} else if (args[2] === 'HBNT' && args[1] === 'cool') {
  console.log('HBNT' + ' ' + 'cool');
}


