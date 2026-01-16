/** ===============================================
* @Name: BULD DATA
================================================= */
/** @Desc: Controlador de Datos masivos */
// =============================================== //
//# Imports >>>
const { request, response } = require('express');
const { sequelize } = require('../db/connection');
const CategoriasModel = require('../models/Categorias');
const { categorias, tiendas, productos, productosCategorias, productosStocks, pedidos } = require('../db/bulkData');
const TiendasModel = require('../models/Tiendas');
const ProductosModel = require('../models/Productos');
const ProductosCategoriasModel = require('../models/ProductosCategorias');
const ProductosStocksModel = require('../models/ProductosStocks');
const PedidosModel = require('../models/Pedidos');

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
      const existProCategorias = await ProductosCategoriasModel.findOne();
      if (!existProCategorias) {
        await this.crearDatos('procates')
      }
      const existProStock = await ProductosStocksModel.findOne();
      if (!existProStock) {
        await this.crearDatos('prostock')
      }
      const existPedidos = await PedidosModel.findOne();
      if (!existPedidos) {
        await this.crearDatos('pedidos')
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

        // Productos y Categrias
        case 'procates':
          await ProductosCategoriasModel.bulkCreate(productosCategorias, { transaction: t });
        break;
        // Productos y Stocks
        case 'prostock':
          await ProductosStocksModel.bulkCreate(productosStocks, { transaction: t });
        break;
        // Pedidos
        case 'pedidos':
          await PedidosModel.bulkCreate(pedidos, { transaction: t });
        break;
      }
      
    })
  }
}
//# IMPORTS: >>>

//# VAR >>>

//# Exports >>>
module.exports = BulkDataController;