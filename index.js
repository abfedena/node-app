//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
var logger = require('./logger').getLogger();
app.get('/', function (req, res) {
	logger.info("Hello World",ere);
 res.send('hello world Data');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
app.use(function (err, req, res, next) {
  logger.error(err.stack)
//  res.status(500).send('Something broke!')
})

/*app.get('404',(err,res)=>{
   logger.error("[uncautherror] : ",err);
})*/
module.exports = app;
