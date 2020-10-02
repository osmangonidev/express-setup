function setup(port=8000) {
    const express=require('express');
    const mongodb=require('mongodb');
    const cors=require('cors');
    const bodyParser=require('body-parser');

    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.listen(port,()=>console.log(`app running on prot:${port}`))
    
    return app; 
}

module.exports.setup=setup;
