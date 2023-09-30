const { Food } = require('../models/models')
const path = require('path');
const ApiError = require('../error/ApiError');

class FoodController {

    async getAllFood(req, res) {
        const food = await Food.findAll()
        res.json(food)
    }

}

module.exports = new FoodController()