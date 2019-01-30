const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    database: "newyork_coffeeshop_db",
    dialect: "postgres",
    operatorsAliases: false
})

const CoffeeShop = sequelize.define('coffeeshop', {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    coffee_destributor: Sequelize.STRING,
    num_locations: Sequelize.INTEGER
})

module.exports = {
    sequelize,
    CoffeeShop
}