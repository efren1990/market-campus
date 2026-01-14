/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class PedidosModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Pedidos = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'pedidos',
        tableName: 'pedidos'
      }
    );

    return Pedidos;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
