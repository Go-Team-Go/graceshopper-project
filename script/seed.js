'use strict';

const {
  db,
  models: { User, Product },
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

  const products = [
    {
      name: 'Raspberry Chambord',
      description: 'a delicious raspberry drink',
      imageUrl:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F01%2F04%2FChambord-cocktails-2000.jpg',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Garden Booch',
      description: 'a delicious mojito',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/3nhNtBkB1equESuWm8IeoM/675cf4b86d42c93a761146d3836559e9/Garden_Booch-tinyjpg.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Spice Panoma',
      description: 'a deliciuos Manhattan',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/3lgiCta6EosQZRjLLn5n8F/65c43983a7dc94e6e977b632623b4499/Spice_PaNoma.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Espresso Martini',
      description: 'a delicious espresso martini',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/2lSsuxgBOgwKGuuWsUYYMe/8fd1096ef2a496e2536c69d07577cce3/Espresso_Martino-tinyjpg.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Margarita',
      description: 'a delicious margarita',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/3D3G1QG2Z9Fk6M7bEZCWQl/f0a1959f00229c03854baf5822314d01/Grove_42_Margarita_cocktail_only.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Ginger Pumpkin',
      description: 'a delicious Ginger Pumpkin',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/5wGt6giEJsJGjFB8TX3JAe/48ddd963d041e5c103151c748e66ca7f/Spice_94_Ginger_Pumpkin_Soda.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Rosemary Booch',
      description: 'a delicious Rosemary Booch',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/26yrQskXtqm2SeSE2mUIOo/846d8e041800f157bba35505678c5629/Rosemary_Booch.png?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Sour Blossom',
      description: 'a delicious Sour Blossom',
      imageUrl:
        'https://media.seedlipdrinks.com/PR1802/media/i1wmenp3/sour-blossom.jpg?width=475&height=900&mode=crop',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Grove Tonic',
      description: 'a delicious Grove Tonic',
      imageUrl:
        'https://images.ctfassets.net/b0q5etab7zkl/5C14WUx5TyOWy0mmMSqQys/0a73fa0d423e3d2b870fd14b1d3bb1ce/Grove_Tonic.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
      price: 1000,
      quantity: 10,
    },
    {
      name: 'Garden Sour',
      description: 'a delicious Garden Sour',
      imageUrl:
        'https://media.seedlipdrinks.com/PR1802/media/gd1pyhux/garden-sour.jpg?width=475&height=900&mode=crop',
      price: 1000,
      quantity: 10,
    },
  ];

  await Product.bulkCreate(products);

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
