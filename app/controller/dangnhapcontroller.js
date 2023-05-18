const user = require('../../models/User');
const { mongoseObject } = require('../../util/moogoose');
const { muTiplemongoseObject } = require('../../util/moogoose');
class Usercontroller{
    index(req,res){
        res.render('dangnhap');
    }
    

    

    checkdangnhap(req, res, next) {
    const data = req.body;
    console.log("datta---"+data.email);
   
  

   
   user.findOne({email:data.email})
  .then(users => {
    if(!users){
      res.send("0 tồn tại email");
    }else if(data.pass != users.pass){
       res.send("mật khẩu 0 chính xác) ")
    }else{
      res.send(" Đăng nhập thành công")
    }
  
  })
  .catch(err => {
    console.log(err);
  });

 
  



      }

     thongtinuser(req,res,next){
        res.send('usser')
     }
      
    }

module.exports =new Usercontroller();