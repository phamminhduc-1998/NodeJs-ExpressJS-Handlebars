//cai dat express
var express = require('express'); 
//tạo app để cấu hình router
var app = express();
//chạy lên local host với post 3000
app.listen(process.env.PORT || '3000');

//cai dat handlebars
var expressHbs = require('express-handlebars');
app.engine('handlebars', expressHbs());
//lưu template vào foder "views"
app.set('view engine','handlebars')


app.get('/',function(req,res){
    res.send("PHAM MINH DUC");
})

//goi trang hbs, đưa layout vào đây
app.get('/handlebars',function(req,res){
    /**
     * đã có thư mục index.handlebars rồi và chỉ cần gọi ra
     */
    res.render('index')
})


