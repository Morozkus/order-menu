const Router = require('express')
const router = new Router()
const orderRouter = require('./orderRouter')
const foodRouter = require('./foodRouter')

router.use('/food', foodRouter)
router.use('/order', orderRouter)

module.exports = router
