const Menu = require('../models/Menu');


exports.onlineMenu = async (req, res) => {
    const menus = await Menu.findAll()
    res.render('menu', {
        page: 'Menu',
        menus
    })
}

exports.menuDish = async (req, res) => {
    const menu = await Menu.findByPk(req.params.id)
    res.render( 'dish', {
        menu
    })
}
