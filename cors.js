function AllowCrossDomain (){
	this.permisos = function(req, res, next){
		
		/*
		var whiteList = [
			'http://localhost:4200/inventario',
			'http://google.com.es'
		];

		var origen = req.headers.origin;
		if(whiteList.indexOf(origen) >= -1){
			res.setHeader('Access-Control-Allow-Origin',origen);
		}
		*/
		
		res.header('Access-Control-Allow-Origin','*');
		res.header('Access-Control-Allow-Headers','Content-Type');
		res.header('Access-Control-Allow-Headers','GET,PUT,POST,DELETE,OPTIONS');
		next();
	}
}

module.exports = new AllowCrossDomain();