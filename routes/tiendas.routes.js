/** ===============================================
* @Name: RUTAS TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { Router } = require('express');
const multer = require('multer');
const TiendasController = require('../controllers/tiendas.controller');
//# Instacias >>>
const router = Router();
const upload = multer();
const tiendasController = new TiendasController();

//# GET ============================================= >>>
router.get('/promociones', upload.none(), tiendasController.getPromos)

//# Instacias >>>
module.exports = router;
