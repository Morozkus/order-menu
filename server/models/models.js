const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Food = sequelize.define('food', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    order: { type: DataTypes.ARRAY(DataTypes.JSONB), allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false }
})

module.exports = {
    Food,
    Order
}





