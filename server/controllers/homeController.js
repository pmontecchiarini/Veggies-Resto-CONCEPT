const Menu = require('../models/Menu');

exports.Homepage = async (req, res) => {
    const menus = await Menu.findAll({
        limit: 3,
    })
    res.render('index', {
        page: 'Menu',
        menus
    })
    
} 