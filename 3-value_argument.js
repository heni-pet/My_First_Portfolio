const parameter = process.parameter.slice(2);

if (parameter[0] === undefined) {
  console.log('No argument');
} else if (parameter[1] === undefined) {
  console.log('HBTN');
} else if (parameter[2] === undefined) {
  console.log('HBTN' + ' cool');
} else {
  console.log('two argument found');
}