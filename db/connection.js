/** ===============================================
* @Name: CONEXIÓN
================================================= */
//# CLASS: Conexión >>>
const { Sequelize } = require('sequelize');
const config = require('../config/config');
const TiendasModel = require('../models/Tiendas');
const ProductosModel = require('../models/Productos');

//# CLASS: Conexión >>>
class DataBase {
  //# [MET]: Constructor >>>
  constructor(sequelizeInstance) {
    this.sequelize = sequelizeInstance || new Sequelize(config);
    this.initializeModels();
  }
  
  //# [MET]: Incializacion de Modelos >>>
  initializeModels() {
    this.TiendasModel = TiendasModel.initialize(this.sequelize);
    this.ProductosModel = ProductosModel.initialize(this.sequelize);
  }

  //# [MET]: Asociación de Modelos >>>
  associateModels() {
    
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