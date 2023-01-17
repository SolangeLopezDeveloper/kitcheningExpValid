module.exports = {
    detail : function(req, res, next) {
       
        return res.render('products/detail');
      },
    list: (req, res) => {
        return res.render('products/list')
    },
}