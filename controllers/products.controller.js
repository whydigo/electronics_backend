const Product = require("../models/Product.model");

module.exports.productController = {
  getProduct: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  postProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        discount,
        info_0,
        info_1,
        info_2,
        info_3,
        info_4,
        info_5,
        info_6,
        info_7,
        info_8,
        info_9,
        category,
      } = req.body;

      const product = await Product.create({
        image: req.file.path,
        name,
        description,
        price,
        discount,
        info_0,
        info_1,
        info_2,
        info_3,
        info_4,
        info_5,
        info_6,
        info_7,
        info_8,
        info_9,
        category,
      });
      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  editProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        price,
        discount,
        info_0,
        info_1,
        info_2,
        info_3,
        info_4,
        info_5,
        info_6,
        info_7,
        info_8,
        info_9,
      } = req.body;

      const product = await Product.findByIdAndUpdate(
        req.params.productId,
        {
          name,
          description,
          price,
          discount,
          info_0,
          info_1,
          info_2,
          info_3,
          info_4,
          info_5,
          info_6,
          info_7,
          info_8,
          info_9,
        },
        { new: true }
      );

      res.json(product);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndRemove(req.params.productId),
        res.json("deleted");
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
