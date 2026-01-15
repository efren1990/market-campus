/** ===============================================
* @Name: SERVER
================================================= */
/** @Desc: Servidor */
// =============================================== //
//# IMPORTS: >>>
const express = require('express');
const { DataBase, sequelize } = require('../db/connection');
const bodyParser = require('body-parser');
const cors = require('cors');

//# Class: Servidor >>>
class Server {
  
  //# [MET]: Constructor >>>
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.database = new DataBase(sequelize);
    this.endpoints = {
      testing: `/api/testing`,
      bulkdata: `/api/bulkdata`,
      productos: `/api/productos`
    }
    this.middlewares();
    this.routes();
  }
  //# [MET]: Middlwares >>>
  middlewares() {
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  //# [MET]: Rutas >>>
  routes() {
    //# Testing >>>
    this.app.use(this.endpoints.testing, require('../routes/test.routes'));
    
    //# Datos Masivos >>>
    this.app.use(this.endpoints.bulkdata, require('../routes/bulk.data.routes'));
    
    //# Productos >>>
    this.app.use(this.endpoints.productos, require('../routes/productos.routes'));

  }
  
  //# [MET]: Listen Express Server 1 >>>
  listen() {
    this.app.listen(this.port, () => {
      console.log(`On Port: ${this.port}`);
    })
  }
  
  //# [MET]: Run Server >>>
  start() {
    this.database.authDB();
    this.database.syncroDB();
    this.listen();
  }

}
//# Exports >>>
module.exports = Server;
