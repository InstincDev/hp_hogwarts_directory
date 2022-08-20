const Character = require('../models/Characters')

module.exports = {
    getPerson: (req, res)=>{
        try{
              res.render('houses/person')
        } catch (err){
              console.error(err)
        }
      
  },
    getAddForm: (req, res)=>{
        try{
            res.render('houses/add')
        } catch (err){
            console.error(err)
        }
    },
    addPerson: async (req, res) => {
        try {
            await Character.create(req.body)
            console.log('Person has been added!')
            res.redirect("/dashboard");
        } catch (err) {
            console.error(err);
            res.render("errors/500");
        }
    }

    
}