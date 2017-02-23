var mongoose=require('mongoose');
var Hero=mongoose.model('Hero');

module.exports=(function(){
	return{
		addHero: function(req,res){
			Hero.findOne({name:req.body.name},function(err,hero){
				if(err){
					console.log(err);
				}
				else{
					if(hero){
						res.json(null);
					}
					else{
						var newHero= new Hero(req.body);
						newHero.save(function(err){
							if(err) console.log(err)
							else{
								console.log('saved hero')
								res.json(newHero);
							}
						})
					}
				}
			})
		},
		getHeros: function(req,res){
			Hero.find({},function(err,result){
				if(err) console.log(err)
				else{
					res.json(result);
				}
			})
		},
		like:function(req,res){
			Hero.findOne({_id:req.params.id},function(err,hero){
				if(err) console.log(err)
				else{
					hero.likes +=1;
					hero.save(function(err){
						if(err) console.log(err)
						else{
							res.json(hero);
						}
					})
				}
			})
		},
		disLike:function(req,res){
			Hero.findOne({_id:req.params.id},function(err,hero){
				if(err) console.log(err)
				else{
					hero.likes -=1;
					hero.save(function(err){
						if(err) console.log(err)
						else{
							res.json(hero);
						}
					})
				}
			})
		},
		changeStatus:function(req,res){
			Hero.findOne({_id:req.params.id},function(err,hero){
				if(err) console.log(err);
				else{
					if(hero.status==='Alive'){
						hero.status="Dead"
					}
					else if(hero.status==='Dead'){
						hero.status='Alive'
					}
					hero.save(function(err){
						if(err)  console.log(err)
						else{
							res.json(hero);
						}
					})
				}
			});
		}
	}
})()