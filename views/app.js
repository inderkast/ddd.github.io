router.get("/", function(req, res){
	eval(require('locus'))
         App.find({}, function(err, allApps){
		 if(err){
			console.log(err);
		 } else {
			 res.render("app/index", {apps:allApps})
		 }	 

	 })
})