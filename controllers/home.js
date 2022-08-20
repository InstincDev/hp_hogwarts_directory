module.exports = {
    getLandingPg: (req, res)=>{
       try{
            res.render('index')
       } catch (err){
            console.error(err)
       }
        
    }
}