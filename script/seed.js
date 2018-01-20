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

  const pads = await Promise.all([
    Pad.create({color: 'blue'}), Pad.create({color: 'blue'}),
    Pad.create({color: 'blue'}), Pad.create({color: 'blue'}),
    Pad.create({color: 'red'}), Pad.create({color: 'red'}),
    Pad.create({color: 'red'}), Pad.create({color: 'red'}),
    Pad.create({color: 'violet'}), Pad.create({color: 'violet'}),
    Pad.create({color: 'violet'}), Pad.create({color: 'violet'}),
    Pad.create({color: 'teal'}), Pad.create({color: 'teal'}),
    Pad.create({color: 'teal'}), Pad.create({color: 'teal'})
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
