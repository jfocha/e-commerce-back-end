// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

// Product.hasMany(Tag, {
//   foreignKey: 'tag_id'
// });

// Tag.belongsTo(Product, {
//   foreignKey: 'product_id',
// });

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tagIds',
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tagIds',
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
