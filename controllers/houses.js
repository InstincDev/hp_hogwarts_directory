const { escapeXML } = require('ejs')
const Character = require('../models/Characters')

module.exports = {
    getPerson: async (req, res) => {
        try{
            let person = await Character.findById(req.params.id).lean() 
            console.log(typeof person)
            if(!person){
                return res.render('errors/404')
            } 
            for(let el in person){console.log(person[el])}
         
            res.render('houses/person',{person})
        } catch (err){
              console.error(err)
              res.render('errors/404')
        }
      
  },
   
    addPerson: async (req, res) => {
        try {
            console.log(req.body)
            await Character.create(req.body)
            console.log('Person has been added!')
            res.redirect("/dashboard");
        } catch (err) {
            console.error(err);
            res.render("errors/500");
        }
    }

    
}