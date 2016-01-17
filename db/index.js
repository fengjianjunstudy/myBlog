var mongoose=require("mongoose"),
    Schema = mongoose.Schema,
    settings=require("../settings"),
    models=require("./Model");
mongoose.connect(settings.url)
console.log(models.User)
mongoose.model("User",mongoose.Schema(models.User))
mongoose.model("Article",mongoose.Schema(models.Article))
global.Model=function(type){
    console.log(mongoose.model(type))
    return mongoose.model(type)
}
