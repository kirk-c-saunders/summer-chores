const { resolve } = require('node:dns');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's the name of the person completing chores?\n`, name => {
  rl.close();
  doSummerChores(name);
});

function doSummerChores(name){
  mowYard(name)
  .then((output) => {
    console.log(output);
    return weedEat(name);
  })
  .then((output) => {
    console.log(output);
    return trimHedges(name);
  })
  .then((output) => {
    console.log(output);
    return collectWood(name);
  })
  .then((output) => {
    console.log(output);
    return waterGarden(name);
  })
  .then((output) => {
    console.log(output);
    console.log(`${name} finished all their chores!`);
  })
  .catch((error) => (console.log(error)));
}

function mowYard (name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve(`${name} mowed the yard.`);
  }, 2000);
  });
}

function weedEat(name){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (Math.random() <= .6){ //60% chance of completing the task
        resolve(`${name} finished using the weed eater.`);
      }
      else{
        reject(`${name} fell asleep after mowing the yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (Math.random() <= .6){ //60% chance of completing the task
        resolve(`${name} finished trimming the hedges.`);
      }
      else{
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (Math.random() <= .6){ //60% chance of completing the task
        resolve(`${name} finished collecting wood.`);
      }
      else{
        reject(`${name} fell asleep after trimming the hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (Math.random() <= .6){ //60% chance of completing the task
        resolve(`${name} finished watering the garden.`);
      }
      else{
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}
