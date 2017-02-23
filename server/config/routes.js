var session=require('../controllers/session.js');
var heros=require('../controllers/heros.js');

module.exports=function(app){
	app.post('/login',function(req,res){
		session.login(req,res);
	})
	app.get('/checkUser',function(req,res){
		session.checkUser(req,res);
	})
	app.get('/logout',function(req,res){
		session.logout(req,res);
	})
	app.post('/addHero',function(req,res){
		heros.addHero(req,res);
	})
	app.get('/getHeros',function(req,res){
		heros.getHeros(req,res);
	})
	app.post('/dash/like/:id',function(req,res){
		heros.like(req,res);
	})
	app.post('/dash/dislike/:id',function(req,res){
		heros.disLike(req,res);
	})
	app.post('/dash/changeStatus/:id',function(req,res){
		heros.changeStatus(req,res);
	})
}