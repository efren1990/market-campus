/** ===============================================
* @Name: BULD DATA
================================================= */
/** @Desc: Controlador de Datos masivos */
// =============================================== //
//# Imports >>>
const { request, response } = require('express');
const { sequelize } = require('../db/connection');
const CategoriasModel = require('../models/Categorias');
const { categorias, tiendas, productos } = require('../db/bulkData');
const TiendasModel = require('../models/Tiendas');
const ProductosModel = require('../models/Productos');

//# [Class]: Bulk Data >>>
class BulkDataController {
  
  constructor() {
    this.insert = this.insert.bind(this);
    this.crearDatos = this.crearDatos.bind(this);
  }

  //# [MET]: Insertar Datos >>>
  async insert(req=request, res=response) {
    const { permission } = req.body
    if (permission === 1) {
      const existCategorias = await CategoriasModel.findOne();
      if (!existCategorias) { 
        await this.crearDatos('cat');
      }
      const existTiendas = await TiendasModel.findOne();
      if (!existTiendas) { 
        await this.crearDatos('tie');
      }
      const existProductos = await ProductosModel.findOne();
      if (!existProductos) { 
        await this.crearDatos('pro');
      }

      res.status(200).json({
        msg: 'Datos insertados !!!'
      })
    } else {

      return res.status(400).json({
        msg: 'Bulk Data error!!!',
        data: permission
      });

    }

  }

  async crearDatos(type) {
    await sequelize.transaction(async(t) => {
        switch(type) {
        // Categorias
        case 'cat':
          await CategoriasModel.bulkCreate(categorias, {transaction: t});
        break;
        
        // Tiendas
        case 'tie':
          await TiendasModel.bulkCreate(tiendas, { transaction: t });
        break;

        // Productos
        case 'pro':
          await ProductosModel.bulkCreate(productos, { transaction: t })
        break;
      }
      
    })
  }
}
//# IMPORTS: >>>

//# VAR >>>

//# Exports >>>
module.exports = BulkDataController;