/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class PromocionesModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Promociones = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'promociones',
        tableName: 'promociones'
      }
    );
    return Promociones;
  }

  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
