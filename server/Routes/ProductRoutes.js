const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel'); 
const requireLogin = require("../Middleware/requireLogin")

// Create a new product
router.post('/', requireLogin, async (req, res) => {
  // console.log(req.body)
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the product.' });
  }
});

// Read all products
router.get('/', requireLogin, async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch products.' });
  }
});

// Read a specific product by ID
router.get('/:productId', requireLogin, async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the product.' });
  }
});

// Update a product by ID
router.put('/:productId', requireLogin, async (req, res) => {
  const productId = req.params.productId;
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the product.' });
  }
});

// Delete a product by ID
router.delete('/:productId', requireLogin, async (req, res) => {
  const productId = req.params.productId;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the product.' });
  }
});

module.exports = router;
