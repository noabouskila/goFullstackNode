const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Thing = require("./models/Thing");
mongoose
  .connect(
    "mongodb+srv://noabouskil_db_user:HyUWIcba41LMoMX0@clustergofullstacknode.9y0j0mz.mongodb.net/db_test?appName=ClusterGoFullstackNode&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));




// middleware pour parser le corps des requêtes en JSON et le rendre accessible via req.body
app.use(express.json());

// middleware generales pour totues les routes  pour gérer les CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// route pour tous les objets qui renvoie un tableau d'objets en JSON
app.get("/api/stuff" , (req, res, next) => {
   Thing.find()
    .then((stuff) => {
    res.status(200).json(stuff)})
    .catch((error) => res.status(400).json({ error }));
});

// route pour un seul objet qui renvoie un objet en JSON
app.get('/api/stuff/:id', (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));   
})

app.put('/api/stuff/:id', (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/stuff/:id', (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});





module.exports = app;

