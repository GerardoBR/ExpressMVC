const Category = require('../models').Category
module.exports ={
    index:function(req,res){
        Category.findAll().then((categories)=>{
            // require.json(categories);
            res.render('categories/index',{categories:categories});
         })
    },
    create :function(req,res){
        Category.create({
            title : req.body.title,
            color : req.body.color
        }).then(result =>{
            res.json(result);
        }).catch(err=>{
            console.log(err);
            res.json(err);
        })
    },
    new: function (req,res){
        res.render('categories/new');
    },
    update :function(req,res){
        Category.update({
            title :req.body.title,
            color :req.body.color
        },{
            where:{
                    id :req.params.id
                }
        }).then(function(response){
            res.redirect('/categories/'+req.params.id)
        })
    },
    edit:function(req,res) {
        Category.findByPk(req.params.id).then(function(category){
            res.render('categories/edit',{category:category})
        })
    },
    show : function(req,res){

        Category.findByPk(req.params.id).then(function(category){
            res.render('categories/show',{category:category});
            //res.json(task)
        })
    },
    destroy:function(req,res){
        // res.json(req.params.id);
        Category.destroy({
            where:{
                id :req.params.id
            }
        }).then(function(response){
            res.redirect('/categories');
        })
    }
}