const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.createOrder)

router.get('/', orderController.getAllOrder)
router.get('/:id', orderController.getOneOrder)
router.get('/products/:id', orderController.getOrderFood)

router.put('/:id', orderController.updateStatusOrder)

router.delete('/:id', orderController.deleteOrder)


module.exports = router
