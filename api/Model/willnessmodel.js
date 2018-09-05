var mongoose=require('mongoose');
var schema=mongoose.Schema;
var ObjectIdSchema = schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;
// create user default Schema
var Willnessschema=new schema({
	_id:{
    type:Number
	},
  willness_name:{
	  type:String
  }
});
var Willness=mongoose.model('willness',Willnessschema);
module.exports=Willness;