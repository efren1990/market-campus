/** ===============================================
* @Name: CONTROLADOR PRODUCTOS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { request, response } = require('express');
//# [CLASS]:  >>>
class ProductosController {
  //# [MET]:  >>>
  constructor() {
    
  }
  //# [MET]:  >>>
  get(req=request, res=response) {
    
    res.status(200).json({
      message: 'Consultado Correctamente',
      
    });

  }
}

module.exports = ProductosController;