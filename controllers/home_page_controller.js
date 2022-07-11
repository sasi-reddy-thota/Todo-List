module.exports.home=function(req,res){
    return res.render('home',{
        name: 'Jai Sasi Reddy',
        heading: 'Jai Balayya Babu'
    });
}