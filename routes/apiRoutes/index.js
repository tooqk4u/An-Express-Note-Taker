const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.use(noteRoutes);



module.exports = router; 


