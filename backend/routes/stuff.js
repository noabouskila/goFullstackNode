const  express = require('express');
const router = express.Router();
const controllerStuff = require('../controllers/stuff');

// route pour tous les objets qui renvoie un tableau d'objets en JSON
router.get("/", controllerStuff.getThings);

// route pour un seul objet qui renvoie un objet en JSON
router.get('/:id', controllerStuff.getThingOne);

router.post('/', controllerStuff.createThing);

router.put('/:id', controllerStuff.updateThing);

router.delete('/:id', controllerStuff.deleteThing);

module.exports = router;

