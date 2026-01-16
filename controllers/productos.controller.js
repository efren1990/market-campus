/** ===============================================
* @Name: CONTROLADOR PRODUCTOS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { request, response } = require('express');
const ProductosStocksModel = require('../models/ProductosStocks');
const ProductosModel = require('../models/Productos');
const TiendasModel = require('../models/Tiendas');
//# [CLASS]:  >>>
class ProductosController {
  //# [MET]:  >>>
  constructor() {
    this.get = this.get.bind(this);
    this.mapData = this.mapData.bind(this);
  }
  //# [MET]:  >>>
  async get(req=request, res=response) {
    
    try {
      //# Busqueda >>>
      let productosStocks;
      productosStocks = await ProductosStocksModel.findAll({
        attributes: [
          'id_producto',
          'cantidad'
        ],
        include: [
          {
            model: ProductosModel,
            as: 'producto',
            attributes: ['id', 'nombre', 'presentacion']
          },
          {
            model: TiendasModel,
            as: 'tienda',
            attributes: ['id', 'nombre', ]
          }
        ],
        raw: false
      });
      //# Sin Datos >>>
      if (!productosStocks){
        return res.status(200).json({
          message: 'No hay datos en el stock', 
          data: 0
        });  
      }
      //# Mapear datos >>>
      let mapData = this.mapData(productosStocks);
      res.status(200).json({
        message: 'Consultado Correctamente', 
        data: mapData
      });

    } catch (error) {
      console.log(`Error: ${ error }`); 
    }
  }

  mapData(data) {
    const result = {}
    let dataResult;

    data.forEach(item => {
      const id_producto = item.id_producto
      // Producto >
      if (!result[id_producto]){
        result[id_producto] = {
          idProducto: item.producto.id,
          nombre: item.producto.nombre,
          presentacion: item.producto.presentacion,
          tiendas: []
        }
      }
      // Tienda >
      result[id_producto].tiendas.push({
        idTienda: item.tienda.id,
        nombre: item.tienda.nombre,
        stock: item.cantidad
      });
    });

    return dataResult = Object.values(result)

  }
}

module.exports = ProductosController;