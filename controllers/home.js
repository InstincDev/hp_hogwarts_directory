module.exports = {
    getLandingPg: (req, res)=>{
       try{
            res.render('index', {title: 'Hogwarts Directory'})
       } catch (err){
            console.error(err)
       }
        
    }
}