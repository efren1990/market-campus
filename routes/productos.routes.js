/** ===============================================
* @Name: RUTAS PRODUCTOS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { Router } = require('express');
const multer = require('multer');
const ProductosController = require('../controllers/productos.controller');
//# Instancias >>>
const router = Router();
const upload = multer();
const productosController = new ProductosController();

//# GET ============================================= >>>
router.get('/prostock', upload.none(), productosController.get);


//# Exports >>>
module.exports = router;





