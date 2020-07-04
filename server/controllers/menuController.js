const Menu = require('../models/Menu');


exports.onlineMenu = async (req, res) => {
    const menus = await Menu.findAll()
    res.render('menu', {
        page: 'Menu',
        menus
    })
}
