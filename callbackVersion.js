const readline = require('node:readline');
let fellAsleep = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's the name of the person completing chores?\n`, name => {
  rl.close();
  doSummerChores(name);
});

function doSummerChores(name){
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            if(!fellAsleep) {
              console.log(`${name} finished all their chores!`);
            }
          })
        })
      })
    })
  })
}

function mowYard (name, callback){
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    callback();
  }, 2000);
}

function weedEat(name, callback){
  setTimeout(() => {
    if (Math.random() <= .6){ //60% chance of completing the task
      console.log(`${name} finished using the weed eater.`);
      callback();
    }
    else{
      console.log(`${name} fell asleep after mowing the yard.`);
      fellAsleep = true;
    }
  }, 1500);   
}

function trimHedges(name, callback){
  setTimeout(() => {
    if (Math.random() <= .6){ //60% chance of completing the task
      console.log(`${name} finished trimming the hedges.`);
      callback();
    }
    else{
      console.log(`${name} fell asleep after weed eating the yard.`);
      fellAsleep = true;
    }
  }, 1000);   
}

function collectWood(name, callback){
  setTimeout(() => {
    if (Math.random() <= .6){ //60% chance of completing the task
      console.log(`${name} finished collecting wood.`);
      callback();
    }
    else{
      console.log(`${name} fell asleep after trimming the hedges.`);
      fellAsleep = true;
    }
  }, 2500);   
}

function waterGarden(name, callback){
  setTimeout(() => {
    if (Math.random() <= .6){ //60% chance of completing the task
      console.log(`${name} finished watering the garden.`);
      callback();
    }
    else{
      console.log(`${name} fell asleep after collecting wood.`);
      fellAsleep = true;
    }
  }, 500);   
}
