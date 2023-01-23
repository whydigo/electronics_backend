const Tablets = require("../models/Tablets.model");

module.exports.tabletsController = {
  // Получение консолей -----------------------
  getTablets: async (req, res) => {
    try {
      const tablets = await Tablets.find();
      res.json(tablets);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Добавление консоли -----------------------
  addTablet: async (req, res) => {
    const {
      cpu,
      numberOfProcessorCores,
      numberOfSimCards,
      screenResolution,
      ram,
      builtInMemory,
      batteryCapacity,
      mainCamera,
      warrantyPeriod,
      image,
      name,
      description,
      price,
      discount,
		model,
		category
    } = req.body;

    try {
      const tablets = await Tablets.create({
        cpu,
        numberOfProcessorCores,
        numberOfSimCards,
        screenResolution,
        ram,
        builtInMemory,
        batteryCapacity,
        mainCamera,
        warrantyPeriod,
        image,
        name,
        description,
        price,
        discount,
		  model,
		  category
      });

      return res.json(tablets);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Изменение консоли --------------------------
  editTablet: async (req, res) => {
    const {
        cpu,
        numberOfProcessorCores,
        numberOfSimCards,
        screenResolution,
        ram,
        builtInMemory,
        batteryCapacity,
        mainCamera,
        warrantyPeriod,
        image,
        name,
        description,
        price,
        discount,
		  model,
		  category
    } = req.body;

    try {
      const tablets = await Tablets.findByIdAndUpdate(
        req.params.tabletsId,
        {
        cpu,
        numberOfProcessorCores,
        numberOfSimCards,
        screenResolution,
        ram,
        builtInMemory,
        batteryCapacity,
        mainCamera,
        warrantyPeriod,
        image,
        name,
        description,
        price,
        discount,
		  model,
		  category
        },
        { new: true }
      );

      return res.json(tablets);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Удаление консоли ------------------------------
  deleteTablet: async (req, res) => {
    try {
      await Tablets.findByIdAndRemove(req.params.tabletsId);
      return res.json("tablet deleted");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};