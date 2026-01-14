/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class TiendasPromocionesModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const TiendasPromociones = super.init(
      {

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'tiendasPromociones',
        tableName: 'tiendasPromociones'
      }
    );

    return TiendasPromociones;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
