app.controller('herosController',function(herosFactory,$routeParams){
	var self= this;
	function getHeros(){
		herosFactory.getHeros(function(data){
			self.herosList=data;
		})
	}
	getHeros();
	self.addHero=function(){
		herosFactory.addHero(self.newHero);
	}

	self.like=function(id){
		herosFactory.like(id);
		getHeros();
	}

	self.dislike=function(id){
		herosFactory.disLike(id);
		getHeros();
	}
	self.changeStatus=function(id){
		herosFactory.changeStatus(id,function(data){
			if(data){
				console.log(data +'controller');
				getHeros();
			}
		})
		
	}
})