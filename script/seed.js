'use strict';

const {
  db,
  models: { User, Product, Cart },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '123',
      email: 'cody@cody.com',
      admin: true,
    }),
    User.create({
      username: 'murphy',
      password: '123',
      email: 'murphy@murphy.com',
      admin: false,
    }),
    User.create({
      username: 'karen',
      password: '123',
      email: 'karen@karen.com',
    }),
  ]);

  const products = require('./productSeed');
  await Product.bulkCreate(products);

  const cart = [
    {
      userId: 1,
      productId: 1,
      quantity: 1,
      name: 'Raspberry Chambord',
      price: 1100,
    },
    {
      userId: 2,
      productId: 2,
      quantity: 1,
      name: 'Garden Booch',
      price: 1200,
    },
    {
      userId: 1,
      productId: 3,
      quantity: 1,
      name: 'Spice Panoma',
      price: 900,
    },
    {
      userId: 2,
      productId: 4,
      quantity: 1,
      name: 'Espresso Martini',
      price: 1000,
    },
  ];

  await Cart.bulkCreate(cart);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
