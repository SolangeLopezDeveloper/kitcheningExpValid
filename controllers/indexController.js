module.exports = {
    home : function(req, res, next) {
        //aca va toda la lógica
        return res.render('home',{
          title : "Kitchening | Home"
        });
      }//Acá siempre tiene que haber una funcion 
}