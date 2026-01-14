/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class ProductosModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Productos = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'productos',
        tableName: 'productos'
      }
    );

    return Productos;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
