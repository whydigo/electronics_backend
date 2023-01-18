const Smarthone = require("../models/Smartphones.model")

module.exports.smarthoneController ={
    // Получение смартфонов

    getSmarthones: async(req, res) => {
        try {
            const smarthones = await Smarthone.find()
            res.json(smarthones)
        } catch (error) {
            return res.json({error:error.message})
        }
    },

    // Добавление смартфонов

    addSmarthones: async(req, res) => {
        const {
            wirelessInterfaces,
            numberOfSimCards,
            operatingSystemVersion,
            model,
            screenDiagonal,
            screenResolution,
            numberProcessorCores,
            cpu,
            builtInMemory,
            ram,
            memoryCardType,
            batteryCapacity,
            image,
            name,
            decription,
            price,
            discount,
        } =req.body

        try {
            const smarthones = await Smarthone.create({
                wirelessInterfaces,
                numberOfSimCards,
                operatingSystemVersion,
                model,
                screenDiagonal,
                screenResolution,
                numberProcessorCores,
                cpu,
                builtInMemory,
                ram,
                memoryCardType,
                batteryCapacity,
                image,
                name,
                decription,
                price,
                discount,  
            })

            return res.json(smarthones)
        } catch (error) {
            return res.json({error:error.message})
        }
    },

    // Изменение смартфонов

    editSmarthones: async(req, res) => {
        const {
            wirelessInterfaces,
            numberOfSimCards,
            operatingSystemVersion,
            model,
            screenDiagonal,
            screenResolution,
            numberProcessorCores,
            cpu,
            builtInMemory,
            ram,
            memoryCardType,
            batteryCapacity,
            image,
            name,
            decription,
            price,
            discount,
        } = req.body

        try {
            const smarthones = await Smarthone.findByIdAndUpdate(
                req.params.smarthoneId,
                {
                    wirelessInterfaces,
                    numberOfSimCards,
                    operatingSystemVersion,
                    model,
                    screenDiagonal,
                    screenResolution,
                    numberProcessorCores,
                    cpu,
                    builtInMemory,
                    ram,
                    memoryCardType,
                    batteryCapacity,
                    image,
                    name,
                    decription,
                    price,
                    discount,
                },
                {new: true}
            );
            return res.json(smarthones)
        } catch (error) {
            return res.json({error:error.message})
        }
    },

    // Удаление смартфонов

    deleteSmarthones: async(req,res) => {
        try {
            await Smarthone.findByIdAndRemove(req.params.smarthoneId)
            return res.json("smarthone deleted")
        } catch (error) {
            return res.json({error:error.message})
        }
    },
};