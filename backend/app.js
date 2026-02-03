const express = require('express');
const app = express();

// middleware pour parser le corps des requêtes en JSON et le rendre accessible via req.body
app.use(express.json());

// middleware generales pour totues les routes  pour gérer les CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, next) => {
    // entre temps davoir une base de données, on affiche simplement le corps de la requête dans la console
    console.log(req.body);
    res.status(201).json({
        message: 'Objet créé !'
    });
});


// route pour les objets qui renvoie un tableau d'objets en JSON
app.get("/api/stuff" , (req, res, next) => {
    const stuff = [
        {
            _id: "oeihfzeoi",
            title: "Mon premier objet",
            description: "Les infos de mon premier objet",
            imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
            price: 4900,
            userId: "qsomihvqios",
        },
        {   
            _id: "oeihfzeoi",
            title: "Mon deuxième objet",
            description: "Les infos de mon deuxième objet",
            imageUrl: "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg", 
            price: 2900,
            userId: "qsomihvqios",
        },
    ];
    res.status(200).json(stuff);

    })

module.exports = app;

