/** ===============================================
* @Name: BULK DATA
================================================= */
/** @Desc:Ruta masiva de datos */
// =============================================== //
//# IMPORTS: >>>
const { Router } = require('express');
const multer = require('multer');
const BulkDataController = require('../controllers/bulk.data.controller');

//# Instancias >>>
const router = Router();
const upload = multer();
const bulkDataController = new BulkDataController();

//# VAR >>>
router.post('/insert', upload.none(), bulkDataController.insert);

//# Exports >>>
module.exports = router;
