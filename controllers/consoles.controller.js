const Console = require("../models/Consoles.model");

module.exports.consolesController = {
  // Получение консолей -----------------------
  getConsoles: async (req, res) => {
    try {
      const consoles = await Console.find();
      res.json(consoles);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Добавление консоли -----------------------
  addConsole: async (req, res) => {
    const {
      processorClockSpeed,
      wirelessInterfaces,
      cpu,
      numberOfHDMIPorts,
      interface,
      numberOfUSBPorts,
      model,
      warrantyPeriod,
      nutrition,
      ram,
      builtInMemory,
      videoProcessor,
      image,
      name,
      description,
      price,
      discount,
    } = req.body;

    try {
      const consoles = await Console.create({
        processorClockSpeed,
        wirelessInterfaces,
        cpu,
        numberOfHDMIPorts,
        interface,
        numberOfUSBPorts,
        model,
        warrantyPeriod,
        nutrition,
        ram,
        builtInMemory,
        videoProcessor,
        image,
        name,
        description,
        price,
        discount,
      });

      return res.json(consoles);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Изменение консоли --------------------------
  editConsole: async (req, res) => {
    const {
      processorClockSpeed,
      wirelessInterfaces,
      cpu,
      numberOfHDMIPorts,
      interface,
      numberOfUSBPorts,
      model,
      warrantyPeriod,
      nutrition,
      ram,
      builtInMemory,
      videoProcessor,
      image,
      name,
      description,
      price,
      discount,
    } = req.body;

    try {
      const consoles = await Console.findByIdAndUpdate(
        req.params.consoleId,
        {
          processorClockSpeed,
          wirelessInterfaces,
          cpu,
          numberOfHDMIPorts,
          interface,
          numberOfUSBPorts,
          model,
          warrantyPeriod,
          nutrition,
          ram,
          builtInMemory,
          videoProcessor,
          image,
          name,
          description,
          price,
          discount,
        },
        { new: true }
      );

      return res.json(consoles);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Удаление консоли ------------------------------
  deleteConsole: async (req, res) => {
    try {
      await Console.findByIdAndRemove(req.params.consoleId);
      return res.json("console deleted");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};
