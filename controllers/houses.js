const Character = require('../models/Characters')

module.exports = {
    getPerson: (req, res)=>{
        try{
              res.render('houses/add', {title: 'Hogwarts Directory'})
        } catch (err){
              console.error(err)
        }
      
  },
    getAddForm: (req, res)=>{
        try{
            res.render('houses/add', {title: 'Hogwarts Directory'})
        } catch (err){
            console.error(err)
        }
    }
    
}