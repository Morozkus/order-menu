const { BasketDevice, Device } = require('../models/models')
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class BasketConroller {
    async getBasket(req, res, next) {
        const basketId = req.query.basketId

        if (!basketId) {
            next(ApiError.badRequest('Баскета нет'))
        }

        const basketDevice = await BasketDevice.findAll({ where: { basketId } })
        const basketDeviceById = []
        basketDevice.forEach(el => basketDeviceById.push(el['deviceId']))
        console.log(basketDeviceById)
        if (!basketDeviceById.length) {
            res.json([])
            return
        }
        const devices = await Device.findAll({
            where: {
                id: {
                    [Op.or]: basketDeviceById
                }
            }
        })

        res.json(devices)
    }

    async pushInBasket(req, res, next) {
        const { basketId, deviceId } = req.body

        if (!basketId || !deviceId) {
            next(ApiError.badRequest())
        }

        const basketDevice = await BasketDevice.create({ basketId, deviceId })

        res.json(basketDevice)
    }
}

module.exports = new BasketConroller()