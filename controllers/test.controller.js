/** ===============================================
* @Name: TESTING CONTROLLER
================================================= */
/** @Desc: Controlador de pruebas */
// =============================================== //
//# IMPORTS: >>>
const { request, response } = require('express');

//# >>>
//# VAR >>>
class TestingController {
  test(req=request, res=response) {
    res.status(200).json({
      msg: 'test ok!!!',
      fec: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
    });
  }  
  testBody(req=request, res=response){
    const { body } = req;
    res.status(200).json({
      msg: 'test ok!!!',
      data: body
    })
  }
}

//# Exports >>>
module.exports = TestingController;
