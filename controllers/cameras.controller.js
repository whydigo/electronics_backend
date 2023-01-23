const Camera = require("../models/Сamera.model");

module.exports.cameraController = {
  getCamera: async (req, res) => {
    try {
      const camera = await Camera.find();
      res.json(camera);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  postCamera: async (req, res) => {
    try {
      const {
        image,
        name,
        description,
        price,
        discount,
        model,
        nutrition,
        batteryCapacity,
        typeOfMatrix,
        permission,
		  reviews,
		  category
      } = req.body;
      const camera = await Camera.create({
        image,
        name,
        description,
        price,
        discount,
        model,
        nutrition,
        batteryCapacity,
        typeOfMatrix,
        permission,
		  reviews,
		  category
      });
      res.json(camera);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  editCamera: async (req, res) => {
    try {
      const {
        image,
        name,
        description,
        price,
        discount,
        model,
        nutrition,
        batteryCapacity,
        typeOfMatrix,
        permission,
      } = req.body;
      const camera = await Camera.findByIdAndUpdate(
        req.params.cameraId,
        {
          image,
          name,
          description,
          price,
          discount,
          model,
          nutrition,
          batteryCapacity,
          typeOfMatrix,
          permission,
        },
        { new: true }
      );
      res.json(camera);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  deleteCamera: async (req, res) => {
    try {
      await Camera.findByIdAndRemove(req.params.cameraId), res.json("deleted");
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
