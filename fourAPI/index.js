const app = require('express')();

app.listen(8080, () =>
{
    console.log('Server has started sucessfully on 8080')
});

app.get('/map',(res,rep)=>{
    //rep.send("welcome")
    rep.send({
        apple:12,
        banana:45,
        grapes:56,
        mango:60
    })
});

