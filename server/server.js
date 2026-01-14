/** ===============================================
* @Name: SERVER
================================================= */
/** @Desc: Servidor */
// =============================================== //
//# IMPORTS: >>>
const express = require('express');
const { DataBase, sequelize } = require('../db/connection');

//# Class: Servidor >>>
class Server {
  //# [MET]: Constructor >>>
  constructor() {
    this.app = express();
    this.app.port = process.env.PORT;
    this.database = new DataBase(sequelize);
  }
  
  //# [MET]: Rutas >>>
  routes() {

  }
  
  //# [MET]: Listen Express Server 1 >>>
  listen() {
    this.app.listen(this.app.port, () => {
      console.log(`On Port: ${this.app.port}`);
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
