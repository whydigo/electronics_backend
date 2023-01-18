const Category = require("../models/Categories.model");

module.exports.categoriesController = {
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find();

            res.json(categories)

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    postCategories: async (req, res) => {
        const { name } = req.body;

        try {
            const categories = await Category.create({ name });

            const data = await res.json(categories)
            return data

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    deleteCategories: async (req, res) => {

        try {
            const categories = await Category.findByIdAndDelete(req.params.categoryId);

            res.json("Удалено")

        } catch (error) {
            return res.json({ error: error.message });
        }
    }
};

