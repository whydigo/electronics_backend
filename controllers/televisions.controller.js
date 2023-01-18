const Television = require("../models/Television.model");

module.exports.televisionsController = {
    getTelevision: async (req, res) => {
        try {
            const television = await Television.find();

            res.json(television);

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    postTelevision: async (req, res) => {
        const { name, description, image, price, discount, connection, characteristics, screen, interface, connector } = req.body;

        try {
            const television = await Television.create({ name, description, image, price, discount, connection, characteristics, screen, interface, connector });

            const data = await res.json(television);
            return data;

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    patchTelevision: async (req, res) => {
        const { name, description, image, price, discount, connection, characteristics, screen, interface, connector } = req.body;

        try {
            const television = await Television.findByIdAndUpdate( req.params.televisionId, { name, description, image, price, discount, connection, characteristics, screen, interface, connector }, { new: true });

            const data = await res.json(television);
            return data;

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    deleteTelevision: async (req, res) => {

        try {
            await Television.findByIdAndDelete(req.params.televisionId);

            res.json("Удалено");

        } catch (error) {
            return res.json({ error: error.message });
        }
    }
};