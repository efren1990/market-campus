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
      msg: 'test ok!!!'
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
