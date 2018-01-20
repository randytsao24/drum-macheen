// seed.js - For seeding database with some good stuff

const db = require('../server/db');
const { User, Pad, Configuration, Sample } = require('../server/db/models');
const fs = require('fs');
const readdir = require('fs-readdir-promise');

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ]);

  const configs = await Promise.all([
    Configuration.create({padAmount: 16, columnAmount: 4})
  ]);

  const samples = await readdir('./Public/samples')
    .then(files => {
      return Promise.all(
        files.map(file => 
          Sample.create({
            name: file,
            category: file.split('-')[0]
          })
        )
      )
    })
    .catch(err => console.error(err));

    const pads = await Promise.all([
      Pad.create({position: 1, color: 'blue', assignedKey: '1'})
        .then(pad => pad.setSample(samples[0])), 
      Pad.create({position: 2, color: 'blue', assignedKey: '2'})
        .then(pad => pad.setSample(samples[6])),
      Pad.create({position: 3, color: 'blue', assignedKey: '3'})
        .then(pad => pad.setSample(samples[7])), 
      Pad.create({position: 4, color: 'blue', assignedKey: '4'})
        .then(pad => pad.setSample(samples[10])),
      Pad.create({position: 5, color: 'red', assignedKey: 'q'})
        .then(pad => pad.setSample(samples[23])), 
      Pad.create({position: 6, color: 'red', assignedKey: 'w'})
        .then(pad => pad.setSample(samples[23])), 
      Pad.create({position: 7, color: 'red', assignedKey: 'e'})
        .then(pad => pad.setSample(samples[69])), 
      Pad.create({position: 8, color: 'red', assignedKey: 'r'})
        .then(pad => pad.setSample(samples[69])), 
      Pad.create({position: 9, color: 'violet', assignedKey: 'a'}), 
      Pad.create({position: 10, color: 'violet', assignedKey: 's'}),
      Pad.create({position: 11, color: 'violet', assignedKey: 'd'}), 
      Pad.create({position: 12, color: 'violet', assignedKey: 'f'}),
      Pad.create({position: 13, color: 'teal', assignedKey: 'z'}), 
      Pad.create({position: 14, color: 'teal', assignedKey: 'x'}),
      Pad.create({position: 15, color: 'teal', assignedKey: 'c'}), 
      Pad.create({position: 16, color: 'teal', assignedKey: 'v'})
    ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${pads.length} pads`);
  console.log(`seeded ${configs.length} configurations`);
  console.log(`seeded ${samples.length} samples`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
