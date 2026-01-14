/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class CategoriasModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Categorias = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'categorias',
        tableName: 'categorias'
      }
    );

    return Categorias;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
