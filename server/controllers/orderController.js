const { Order, Food } = require('../models/models')
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class OrderController {
    async createOrder(req, res, next) {
        const { orders } = req.body

        if (!orders.length) {
            next(ApiError.badInfo('Не указаны некоторые данные'))
        }
        const order = await Order.create({
            status: 'process',
            order: orders
        })

        res.json(order)
    }

    async getAllOrder(req, res) {
        const orders = await Order.findAll()
        res.json(orders)
    }

    async getOneOrder(req, res) {
        const id = req.params.id
        const order = await Order.findOne({ where: { id } })
        res.json(order)
    }

    async updateStatusOrder(req, res) {
        const id = req.params.id
        const order = await Order.update({ status: 'ready' }, { where: { id } })
        res.json(order)
    }

    async deleteOrder(req, res) {
        const id = req.params.id
        const order = await Order.destroy({ where: { id } })
        res.json(order)
    }

    async getOrderFood(req, res) {
        const id = req.params.id
        const order = await Order.findOne({ where: { id } })

        if (!order) {
            next(ApiError.badInfo('Не указаны некоторые данные'))
        }

        const foodId = order.order.map(el => Number(el.foodId))

        const food = await Food.findAll({
            where: {
                id: {
                    [Op.or]: foodId
                }
            }
        })

        res.json(food)
    }
}

module.exports = new OrderController()