
const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ "msg": "*estoy en rutas" });
})

router.post('/login', async (req, res) => {
    const { correo, contrasenia } = req.body;

    if (correo == "correo@correo.com" && contrasenia == "123"){

        res.status(200).json("usuario logueado");

    } else {
        res.status(404).json("usuario o contraseña incorrecta");
    }

});

router.get('/get_users', async (req, res) => {

    var users_list
    users_list = []
    //users_list= [{id:1,user:"user1"},{id:2,user:"admin"},{id:3,user:"xd"},{id:4,user:"root"}]
    if (users_list.length > 0 ){
        res.status(200).json(users_list);
    } else {
        res.status(404).json("no hay usuarios");
    }
    

});


module.exports = router;