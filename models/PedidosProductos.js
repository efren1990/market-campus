/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class PedidosProductosModel extends Model {

  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
  
    const PedidosProductos = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'pedidosProductos',
        tableName: 'pedidosProductos'
      }
    );

    return PedidosProductos;

  }
  
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
