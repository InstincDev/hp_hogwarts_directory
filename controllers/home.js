module.exports = {
    getLandingPg: (req, res)=>{
       try{
            res.render('index')
       } catch (err){
            console.error(err)
       }
        
    },
    getAddForm: (req, res)=>{
     try{
         res.render('add')
     } catch (err){
         console.error(err)
     }
 },
}