const user = require ('../models/data')

module.exports.getUsers = (req,res)=>{
    user.findAll()
    .then((result)=>{
     res.status(202).json(result);
    })
    .catch((err)=>{
        res.status(404).json(err);
    })
}

module.exports.postUsers = (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    user.create({
        name:name,
        email:email
    }).then(result=>{
       res.end()
    }).catch(err=>{
        console.log(err)
    })
}

module.exports.deleteUser = (req,res)=>{
    let id = req.params.id;
    console.log(id)
    user.destroy({where:{id:id}}).then(res.sendStatus(200))
  .catch((err)=>{
    console.log(err);
  })
}