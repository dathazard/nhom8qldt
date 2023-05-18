const trangchurt  = require('./new');
const dienthoairt = require('./dienthoai');
const labtoprt = require('./labtop');
const tivirt = require('./tivi');
const dangnhaprt = require('./dangnhap');
function route(app){
app.use('/dangnhap',dangnhaprt);
app.use('/tivi',tivirt);
app.use('/labtop',labtoprt);
app.use('/dienthoai',dienthoairt);
app.use('/',trangchurt);

}
module.exports = route;