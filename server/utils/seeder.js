const fs = require('fs');
const chalk = require('chalk');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const setupDB = require('./db');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Category = require('../models/category');

const NUM_BRANDS = 5;
const NUM_CATEGORIES = 5;

const seedDB = async () => {
  try {
    console.log(`${chalk.blue('✓')} ${chalk.blue('Seed database started')}`);

    // Clear existing data
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Brand.deleteMany({});

    let categories = await Category.find().select('_id');
    if (categories.length < NUM_CATEGORIES) {
      for (let i = 0; i < NUM_CATEGORIES; i++) {
        const category = new Category({
          name: faker.commerce.department(),
          description: faker.lorem.sentence(),
          isActive: true
        });
        await category.save();
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Categories seeded.')}`);
      categories = await Category.find().select('_id');
    }

    let brands = await Brand.find().select('_id');
    if (brands.length < NUM_BRANDS) {
      for (let i = 0; i < NUM_BRANDS; i++) {
        const brand = new Brand({
          name: faker.company.name(),
          description: faker.lorem.sentence(),
          isActive: true
        });
        await brand.save();
      }
      console.log(`${chalk.green('✓')} ${chalk.green('Brands seeded.')}`);
      brands = await Brand.find().select('_id');
    }

    const productsData = JSON.parse(fs.readFileSync(`${__dirname}/../products.json`, 'utf-8'));
    const products = [];

    if (brands.length === 0 || categories.length === 0) {
      console.log(`${chalk.red('x')} ${chalk.red('No brands or categories found. Please seed them first.')}`);
      return;
    }

    productsData.forEach(product => {
        const randomBrandIndex = faker.number.int({ max: brands.length - 1 });
        const randomCategoryIndex = faker.number.int({ max: categories.length - 1 });
        const slug = product.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        products.push({
            ...product,
            slug,
            brand: brands[randomBrandIndex]._id,
            category: categories[randomCategoryIndex]._id
        });
    });

    const remainingProducts = 50 - products.length;
    for (let i = 0; i < remainingProducts; i++) {
        const name = faker.commerce.productName();
        const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        const randomBrandIndex = faker.number.int({ max: brands.length - 1 });
        const randomCategoryIndex = faker.number.int({ max: categories.length - 1 });
        products.push({
            name,
            slug,
            description: faker.lorem.sentence(),
            sku: faker.string.alphanumeric(10),
            price: faker.commerce.price(),
            quantity: faker.number.int({ min: 1, max: 100 }),
            taxable: faker.datatype.boolean(),
            isActive: true,
            imageUrl: `https://placekitten.com/400/${400 + i}`,
            imageKey: `product-image-${i}`,
            brand: brands[randomBrandIndex]._id,
            category: categories[randomCategoryIndex]._id
        });
    }

    await Product.bulkWrite(
      products.map(product => ({
        insertOne: {
          document: product
        }
      }))
    );

    console.log(`${chalk.green('✓')} ${chalk.green('Products seeded from products.json.')}`);
  } catch (error) {
    console.log(`${chalk.red('x')} ${chalk.red('Error while seeding database')}`);
    console.log(error);
    return null;
  } finally {
    await mongoose.connection.close();
    console.log(`${chalk.blue('✓')} ${chalk.blue('Database connection closed!')}`);
  }
};

(async () => {
  try {
    await setupDB();
    await seedDB();
  } catch (error) {
    console.error(`Error initializing database: ${error.message}`);
  }
})();
