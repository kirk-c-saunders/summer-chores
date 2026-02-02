const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's the name of the person completing chores?\n`, name => {
  console.log(`Hi ${name}!`);
  rl.close();
});