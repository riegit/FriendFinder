//Dependencies
var path = require('path');

//Routing
//viewed at /survey page
module.exports = function(app){

    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
    //Routing to home (default) if there is no matching page
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}

