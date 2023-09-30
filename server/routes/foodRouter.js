const Router = require('express')
const router = new Router()
const foodController = require('../controllers/FoodController')

router.get('/', foodController.getAllFood)

module.exports = router