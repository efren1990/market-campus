/** ===============================================
* @Name: CONEXIÓN
================================================= */
//# CLASS: Conexión >>>
const { Sequelize } = require('sequelize');
const config = require('../config/config');
//# Model: Tiendas >>>
const TiendasModel = require('../models/Tiendas');
const TiendasPromocionesModel = require('../models/TiendasPromociones');
//# Model: Promociones >>>
const PromocionesModel = require('../models/Promociones');
//# Model: Productos >>>
const ProductosModel = require('../models/Productos');
const ProductosStocksModel = require('../models/ProductosStocks');
const ProductosCategoriasModel = require('../models/ProductosCategorias');
//# Model: Pedidos >>>
const PedidosModel = require('../models/Pedidos');
const PedidosProductosModel = require('../models/PedidosProductos');
//# Model: Categorias >>>
const CategoriasModel = require('../models/Categorias');
//# CLASS: Conexión >>>
class DataBase {
  //# [MET]: Constructor >>>
  constructor(sequelizeInstance) {
    this.sequelize = sequelizeInstance || new Sequelize(config);
    this.initializeModels();
    this.associateModels();
  }
  
  //# [MET]: Incializacion de Modelos >>>
  initializeModels() {
    console.log('Iniciando Modelos');
    this.TiendasModel             = TiendasModel.initialize(this.sequelize);
    this.ProductosModel           = ProductosModel.initialize(this.sequelize);
    this.TiendasPromocionesModel  = TiendasPromocionesModel.initialize(this.sequelize);
    this.PromocionesModel         = PromocionesModel.initialize(this.sequelize);
    this.ProductosStocksModel     = ProductosStocksModel.initialize(this.sequelize);
    this.ProductosCategoriasModel = ProductosCategoriasModel.initialize(this.sequelize);
    this.PedidosModel             = PedidosModel.initialize(this.sequelize);
    this.PedidosProductosModel    = PedidosProductosModel.initialize(this.sequelize);
    this.CategoriasModel          = CategoriasModel.initialize(this.sequelize);
  }

  //# [MET]: Asociación de Modelos >>>
  associateModels() {
    console.log("Asociando Modelos");
    this.ProductosCategoriasModel.associate();
    this.ProductosStocksModel.associate();
    this.PedidosProductosModel.associate();
    this.TiendasPromocionesModel.associate();
    this.ProductosModel.associate();
    this.PedidosModel.associate();
  }

  //# [MET]: Autenticación BD >>>
  async authDB() {
    try {
      await this.sequelize.authenticate();
      console.log(`DB Connected`);
    } catch (error) {
      console.log(`Error ${ error }`);
    }
  }
  //# [MET]: Sincro BD >>>
  async syncroDB() {
    try {
      await this.sequelize.sync();
    } catch(error) {
      console.log(`Error ${ error }`);
    }
  }
  //# [MET]: Close >>>
  closeBD() {
    this.sequelize.close();
  }
}
//# Exports >>>
module.exports = {
  DataBase,
  sequelize: new Sequelize(config)
}