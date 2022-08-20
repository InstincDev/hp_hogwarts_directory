const { escapeXML } = require('ejs')
const Character = require('../models/Characters')

module.exports = {
    getPerson: async (req, res) => {
        try{
            let person = await Character.findById(req.params.id).lean() 
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
    },

    getGryffindors: async (req, res) => {
        try{
            let charData = await Character.find({house:"Gryffindor"}).lean() 
            if(!charData){
                return res.render('errors/404')
            } 
            res.render('houses/gryffindors',{charData})
        } catch (err){
              console.error(err)
              res.render('errors/404')
        }
      
  },
    getSlytherins: async (req, res) => {
        try{
            let charData = await Character.find({house:"Slytherin"}).lean() 
            if(!charData){
                return res.render('errors/404')
            } 
            res.render('houses/slytherins',{charData})
        } catch (err){
            console.error(err)
            res.render('errors/404')
        }
  
    },
    getHufflepuffs: async (req, res) => {
    try{
        let charData = await Character.find({house:"Hufflepuff"}).lean() 
        if(!charData){
            return res.render('errors/404')
        } 
        res.render('houses/hufflepuffs',{charData})
    } catch (err){
          console.error(err)
          res.render('errors/404')
    }
  
},
    getRavenclaws: async (req, res) => {
        try{
            let charData = await Character.find({house:"Ravenclaw"}).lean() 
            if(!charData){
                return res.render('errors/404')
            } 
            res.render('houses/ravenclaws',{charData})
        } catch (err){
              console.error(err)
              res.render('errors/404')
        }
      
  },

    
}