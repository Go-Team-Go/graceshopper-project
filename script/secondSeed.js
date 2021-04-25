const products = [
  {
    name: 'Coding Cosmo',
    description: 'a delicious cosmo with a refreshing twist',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/somdsdzo/cosnopolitan-2.png',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Binary Booch',
    description: 'a delicious garden mojito',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/3nhNtBkB1equESuWm8IeoM/675cf4b86d42c93a761146d3836559e9/Garden_Booch-tinyjpg.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Python Paloma',
    description: 'a deliciuos spiced paloma',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/3lgiCta6EosQZRjLLn5n8F/65c43983a7dc94e6e977b632623b4499/Spice_PaNoma.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Express-o Martini',
    description: 'a delicious espresso martini',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/2lSsuxgBOgwKGuuWsUYYMe/8fd1096ef2a496e2536c69d07577cce3/Espresso_Martino-tinyjpg.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'MEAN Margarita',
    description: 'a delicious classic margarita',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/3D3G1QG2Z9Fk6M7bEZCWQl/f0a1959f00229c03854baf5822314d01/Grove_42_Margarita_cocktail_only.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Pixel Pumpkin',
    description: 'a delicious Ginger + Pumpkin refresher',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/5wGt6giEJsJGjFB8TX3JAe/48ddd963d041e5c103151c748e66ca7f/Spice_94_Ginger_Pumpkin_Soda.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Big O Booch',
    description: 'a delicious Rosemary Booch',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/26yrQskXtqm2SeSE2mUIOo/846d8e041800f157bba35505678c5629/Rosemary_Booch.png?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Back End Blossom',
    description: 'a delicious Sour Blossom',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/i1wmenp3/sour-blossom.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Token Tonic',
    description: 'A refreshing token with unique flavors',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/5C14WUx5TyOWy0mmMSqQys/0a73fa0d423e3d2b870fd14b1d3bb1ce/Grove_Tonic.jpg?fm=jpg&q=90&w=800&h=1120&fit=fill',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Syntax Sour',
    description: 'a delicious Garden Sour',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/gd1pyhux/garden-sour.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  //   ...new stuff
  {
    name: 'grid',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/esfasy1n/resolutionhighball_serveonly_orangeblossom.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description:
      'https://media.seedlipdrinks.com/PR1802/media/0fqlt0q5/resolutionhighball_serveonly_coldbrew.jpg?width=475&height=900&mode=crop',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description:
      'https://media.seedlipdrinks.com/PR1802/media/awelyj4h/resolutionhighball_serveonly_booch.jpg?width=475&height=900&mode=crop',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: 'Node Nog',
    description:
      'https://media.seedlipdrinks.com/PR1802/media/v4upvgvb/alternative-egg-nog.png?width=475&height=900&mode=crop',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/qz3gc0wb/apple-highball-updated.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/0p4porsx/grove-ginger-highball.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/ydglihha/eastside.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description:
      'https://media.seedlipdrinks.com/PR1802/media/ng0pc3h4/minosa-2.png?width=475&height=900&mode=crop',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/xwojod5i/citrus-fizz.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/duvnek5c/spice-and-black-2.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/o2yplmxu/damascus.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/gx0mwh1a/spiced-mule.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/tscfvwwr/toddy.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/2bvllgvx/from-the-field.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/gl3dmbm3/husk.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/a4qiet3d/laxtons-gage.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/rktl2iix/misowari.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/pykhbzq0/mint-cooler.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/ihmkisib/watermelon-sour.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/r2yjcycc/fireworks.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/owaccgmb/rhubarb-spritz.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/3sonnf51/the-bees-peas.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/mfwlq1bn/pear-parsnip.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/gd1pyhux/garden-sour.jpg?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/lb2jfwxf/cherry-blossom.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://media.seedlipdrinks.com/PR1802/media/cbxmjzjg/hedge-your-bets.png?width=475&height=900&mode=crop',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://images.ctfassets.net/b0q5etab7zkl/60S91HzDshhYQJNlRU7VnQ/53b40417098415c2a5768456860b74a2/Seedlip_Savoy_S1_w1b__1_.jpg',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UbajuCq_y8YASUk-I8vyNODe6MrfZO9mNw&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0W5AFjWGsxT4prkUXje7MJjNmWSQdvZ7sQ&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXmm3IfR-y31cMWvgTY4sYbZenUKpcl1TXA&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWmPMtao3PALW1PvuMXkAVo58ZQlMyiTUvA&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHnzbFa63UhKDY4KjKDiLY4bFI0Jd6tiv5g&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAwCzBMC1RkdMqQf7gAm-UmfEhFI5vewMpg&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhXGxXL9BBosp_B62CTO-L9KfwVep3EYL8g&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZzeFs1SzvUeAuJOJLepPU5ZkUKCqkwLMbImJULTjhcaRVou9PJOL3mtHv-KvmlM4s5c&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekwgv_gaWz4v914gBgIDxUZnhQTq6N8ALqA&usqp=CAU',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
  {
    name: '',
    description: '',
    imageUrl: '',
    price: 1000,
    quantity: 10,
  },
];
