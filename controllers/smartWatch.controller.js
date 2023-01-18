const SmartWatch = require("../models/SmartWatchs.model");

module.exports.smartWatchController = {
  getSmartWatch: async (req, res) => {
    try {
      const smartWatch = await SmartWatch.find();
      res.json(smartWatch);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  postSmartWatch: async (req, res) => {
    try {
      const {
        image,
        name,
        description,
        price,
        discount,
        screenDiagonal,
        screenResolution,
        typeOfScreen,
        model,
        nutrition,
        theBatteryChargingTime,
        batteryCapacity,
        additionalOptionsForSmartHours,
        reviews,
        category,
      } = req.body;
      const smartWatch = await SmartWatch.create({
        image,
        name,
        description,
        price,
        discount,
        screenDiagonal,
        screenResolution,
        typeOfScreen,
        model,
        nutrition,
        theBatteryChargingTime,
        batteryCapacity,
        additionalOptionsForSmartHours,
        reviews,
        category,
      });
      res.json(smartWatch);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  editSmartWatch: async (req, res) => {
    try {
      const {
        image,
        name,
        description,
        price,
        discount,
        screenDiagonal,
        screenResolution,
        typeOfScreen,
        model,
        nutrition,
        theBatteryChargingTime,
        batteryCapacity,
        additionalOptionsForSmartHours,
        reviews,
        category,
      } = req.body;
      const smartWatch = await SmartWatch.findByIdAndUpdate(
        req.params.smartWatchId,
        {
          image,
          name,
          description,
          price,
          discount,
          screenDiagonal,
          screenResolution,
          typeOfScreen,
          model,
          nutrition,
          theBatteryChargingTime,
          batteryCapacity,
          additionalOptionsForSmartHours,
          reviews,
          category,
        },
        { new: true }
      );
      res.json(smartWatch);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteSmartWatch: async (req, res) => {
    try {
      await SmartWatch.findByIdAndRemove(req.params.smartWatchId),
        res.json("deleted");
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
