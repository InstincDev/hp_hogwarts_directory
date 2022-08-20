const Character = require('../models/Characters')

module.exports = {
     getRoster: async (req,res) => {
        try{
            const charData = await Character.find()
            console.log(typeof charData)
            res.render('dashboard', {charData})
        }catch (err) {
            console.log(err)
        }
     }
}

