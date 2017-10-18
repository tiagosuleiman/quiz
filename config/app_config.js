var express = require('express')
	,app = module.exports = express()
	,bodyParser = require('body-parser')
	,allowCors = function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	    res.header('Access-Control-Allow-Credentials', 'true');
		next();
    };

app.listen(5000);
app.use(express.static('./public'));
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
