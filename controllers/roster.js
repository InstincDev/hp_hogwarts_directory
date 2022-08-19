const Character = require('../models/Characters')

module.exports = {
     getRoster: async (req,res) => {
        try{
            const charData = await Character.find()
            res.render('dashboard', {people: charData, title: 'Dashboard'})
        }catch (err) {
            console.log(err)
        }
     }
}

