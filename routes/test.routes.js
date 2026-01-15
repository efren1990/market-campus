/** ===============================================
* @Name: TESTING ROUTES
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS: >>>
const { Router } = require('express');
const multer = require('multer');
const TestingController = require('../controllers/test.controller');
//# Instancias >>>
const router = Router();
const upload = multer();
const testinController = new TestingController();
//# >>>

//# GET ============================================= >>>
router.get('/test', testinController.test);

//# POST ============================================ >>>
router.post('/testbody', upload.none(), testinController.testBody);

//# Exports >>>
module.exports = router;


