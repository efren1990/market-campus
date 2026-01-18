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
const PedidosProductosModel = require('../models/PedidosProductos');
const ProductosCategoriasModel = require('../models/ProductosCategorias');
const CategoriasModel = require('../models/Categorias');
//# [CLASS]:  >>>
class ProductosController {
  //# [MET]:  >>>
  constructor() {
    this.get = this.get.bind(this);
    this.getpromas = this.getpromas.bind(this);
    this.getCategorias = this.getCategorias.bind(this);
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
      let mapData = this.mapData(productosStocks, 'ps');
      res.status(200).json({
        message: 'Consultado Correctamente', 
        data: mapData
      });

    } catch (error) {
      console.log(`Error: ${ error }`); 
    }
  }

  //# [MET]:  >>>
  async getpromas(req=request, res=response) {
    try {
      
      let productosMasVendidos = await PedidosProductosModel.findAll({
        attributes: ['id', 'cantidad', 'id_producto'],
        include: [
          {
            model: ProductosModel,
            as: 'producto',
            attributes: ['id', 'nombre', 'presentacion']
          }
        ],
        order: [
          ['cantidad', 'DESC']
        ],
        raw: false
      });
      if (!productosMasVendidos) {
        return res.status(200).json({
          message: 'No hay datos',
          data: 0
        });
      }

      let mapData = this.mapData(productosMasVendidos, 'pm')
      mapData.sort((a, b) => b.unidadesVendidas - a.unidadesVendidas);
      res.status(200).json({
        message: 'consutlado correctamente',
        data: mapData
      })

    } catch(error) {
      console.log(`Error: ${ error }`); 
    }
  }

  //# [MET]:  >>>
  async getCategorias(req=request, res=response) {
    try {
      let productosCategorias
      productosCategorias = await ProductosCategoriasModel.findAll({
        attributes: ['id'],
        include: [
          {
            model: ProductosModel,
            as: 'producto',
            attributes: ['nombre']
          },
          {
            model: CategoriasModel,
            as: 'categoria',
            attributes: ['id', 'nombre']
          }
        ]
      });
      if (!productosCategorias) {
        return res.status(200).json({
          message: 'No hay datos realacionados',
          data: 0
        });
      }
      
      let mapData = this.mapData(productosCategorias, 'pc')

      return res.status(200).json({
        message: 'Consultado correctamente',
        data: mapData
      });
    } catch(error) {
      console.log(`Errors: ${ error }`);
    }
  }
  //# [MET]: Mapear Datos >>>
  mapData(data, type) {
    const result = {}
    let dataResult;
    
    if (type === 'ps') {
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
    }else if (type === 'pm') {
          
      data.forEach(item => {
        
        let id_producto = item.id_producto;
        let cantidad = parseFloat(item.cantidad);
        if (!result[id_producto]) {
          result[id_producto] = {
            idProducto: item.id_producto,
            nombre: item.producto.nombre,
            presentacion: item.producto.presentacion,
            unidadesVendidas: parseFloat(item.cantidad)
          }
        }
        result[id_producto].unidadesVendidas += cantidad;
      });
    }else if (type === 'pc') {
      data.forEach(item => {
        let id_categoria = item.categoria.id
        if (!result[id_categoria]) {
          result[id_categoria] = {
            id_categoria: item.categoria.id,
            nombre: item.categoria.nombre,
            cantProductos: 0
          }
        }
        result[id_categoria].cantProductos += 1
      })
    }
    return dataResult = Object.values(result)
  }
}

module.exports = ProductosController;