const {CoffeeShop} = require('./models')

async function createCoffeeShops() {
    await CoffeeShop.destroy({where: {}})
    try {
        await CoffeeShop.bulkCreate([
            {
                name: `Variety Coffee`,
                location: `368 Graham Ave Brooklyn, NY 11211`,
                coffee_destributor: `self destributed`,
                num_locations: 5
            },
            {
                name: `Blackstar`,
                location: `Williamsburg`,
                coffee_destributor: `self destributed`,
                num_locations: 1
            },
            {
                name: `Oslo Coffee Roasters`,
                location: `Williamsburg`,
                coffee_destributor: `self destributed`,
                num_locations: 3
            },
            {
                name: `Hungry Ghost`,
                location: `Bushwick`,
                coffee_destributor: `self destributed`,
                num_locations: 3
            }
        ])
    } catch(e) {
        console.error(e)
    }
    process.exit()
}

createCoffeeShops()