const Laptops = require("../models/Laptops.model");

module.exports.laptopsController = {
  // Получение консолей -----------------------
  getLaptops: async (req, res) => {
    try {
      const laptops = await Laptops.find();
      res.json(laptops);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Добавление консоли -----------------------
  addLaptop: async (req, res) => {
    const {
      processorClockSpeed,
      numberOfProcessorCores,
      processor,
      screenResolution,
      updateFrequency,
      warrantyPeriod,
      videoAdapterMemorySize,
      videoAdapter,
      batteryCapacity,
      ram,
      driveType,
      ssdStorageCapacity,
      housingMaterial,
      image,
      name,
      description,
      price,
      discount,
    } = req.body;

    try {
      const laptops = await Laptops.create({
      processorClockSpeed,
      numberOfProcessorCores,
      processor,
      screenResolution,
      updateFrequency,
      warrantyPeriod,
      videoAdapterMemorySize,
      videoAdapter,
      batteryCapacity,
      ram,
      driveType,
      ssdStorageCapacity,
      housingMaterial,
      image,
      name,
      description,
      price,
      discount,
      });

      return res.json(laptops);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Изменение консоли --------------------------
  editLaptop: async (req, res) => {
    const {
        processorClockSpeed,
        numberOfProcessorCores,
        processor,
        screenResolution,
        updateFrequency,
        warrantyPeriod,
        videoAdapterMemorySize,
        videoAdapter,
        batteryCapacity,
        ram,
        driveType,
        ssdStorageCapacity,
        housingMaterial,
        image,
        name,
        description,
        price,
        discount,
    } = req.body;

    try {
      const laptops = await Laptops.findByIdAndUpdate(
        req.params.laptopsId,
        {
            processorClockSpeed,
            numberOfProcessorCores,
            processor,
            screenResolution,
            updateFrequency,
            warrantyPeriod,
            videoAdapterMemorySize,
            videoAdapter,
            batteryCapacity,
            ram,
            driveType,
            ssdStorageCapacity,
            housingMaterial,
            image,
            name,
            description,
            price,
            discount,
        },
        { new: true }
      );

      return res.json(laptops);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },

  // Удаление консоли ------------------------------
  deleteLaptop: async (req, res) => {
    try {
      await Laptops.findByIdAndRemove(req.params.laptopsId);
      return res.json("laptop deleted");
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
};