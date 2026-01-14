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
        id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        estado: {
          type:  DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'estado'
        },
        inicio: {
          type:  DataTypes.DATE,
          allowNull: false,
          field: 'inicio'
        },
        fin: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'fin'
        },
        id_tienda: {
          type:  DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'id_tienda'
        },
        id_promocion: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'id_promocion'
        },
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
