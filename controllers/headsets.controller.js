const Headset = require("../models/Headset.model");

module.exports.headsetsController = {
    getHeadset: async (req, res) => {
        try {
            const headset = await Headset.find();

            res.json(headset);

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    postHeadset: async (req, res) => {
        const { name, description, image, price, discount, compatibility, connectType, connector, characteristics, techFeatures, nutrition,category } = req.body;

        try {
            const headset = await Headset.create({ name, description, image, price, discount, compatibility, connectType, connector, characteristics, techFeatures, nutrition,category });

            const data = await res.json(headset);
            return data;

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    patchHeadset: async (req, res) => {
        const { name, description, image, price, discount, compatibility, connectType, connector, characteristics, techFeatures, nutrition, category } = req.body;

        try {
            const headset = await Headset.findByIdAndUpdate( req.params.headsetId, { name, description, image, price, discount, compatibility, connectType, connector, characteristics, techFeatures, nutrition,category }, { new: true });

            const data = await res.json(headset);
            return data;

        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    deleteHeadset: async (req, res) => {

        try {
            await Headset.findByIdAndDelete(req.params.headsetId);

            res.json("Удалено");

        } catch (error) {
            return res.json({ error: error.message });
        }
    }
};