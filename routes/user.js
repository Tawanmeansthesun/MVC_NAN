const express = require('express');
const router = express.Router();
const { userView, firstmodelView, secondmodelView, firstmodelsubmit, secondmodelsubmit } = require('../controllers/Controller');

router.get('/main', userView);
router.get('/firstModel', firstmodelView);
router.get('/secondModel', secondmodelView);

router.post('/firstModel', firstmodelsubmit);
router.post('/secondModel', secondmodelsubmit);

module.exports = router;