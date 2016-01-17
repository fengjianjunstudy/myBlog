var mongoose=require("mongoose")
var ObjectId=mongoose.Schema.Types.ObjectId;
module.exports={
    User:{
        username:{type:String,required:true},
        pwd:{type:String,required:true},
        email:{type:String},
        avatar:{type:String}
    },
    Article: {
        user:{type:ObjectId,ref:'User'}, //用户
        title: String, //标题
        content: String, //内容
        createAt:{type: Date, default: Date.now} //创建时间
    }
}