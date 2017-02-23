var mongoose=require('mongoose');
var Schema= mongoose.Schema;

var HeroSchema= new Schema({
	name:{type:String},
	power:{type:String},
	likes:{type:Number , default:0},
	status:{type:String,default:'Alive'}
})

mongoose.model('Hero',HeroSchema)