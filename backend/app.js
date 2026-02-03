const express = require('express');
const app = express();
const mongoose = require("mongoose");
const stuffRoutes = require('./routes/stuff');


// middleware pour parser le corps des requêtes en JSON et le rendre accessible via req.body
app.use(express.json());

// middleware generales pour totues les routes  pour gérer les CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// routes pour les opérations CRUD sur les objets "Thing"
app.use('/api/stuff', stuffRoutes);


mongoose
  .connect(
    "mongodb+srv://noabouskil_db_user:HyUWIcba41LMoMX0@clustergofullstacknode.9y0j0mz.mongodb.net/db_test?appName=ClusterGoFullstackNode&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));


module.exports = app;

