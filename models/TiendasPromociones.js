/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');
const TiendasModel = require('./Tiendas');
const PromocionesModel = require('./Promociones');

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
          field: 'id_tienda',
          references: {
            model: 'tiendas',
            key: 'id'
          }
        },
        id_promocion: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'id_promocion',
          references: {
            model: 'promociones',
            key: 'id'
          }
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
    this.belongsTo(TiendasModel, { foreignKey: 'id_tienda', as: 'tienda' });
    this.belongsTo(PromocionesModel, { foreignKey: 'id_promocion', as: 'promociones' });
  }

}

//# EXPORTS >>>
module.exports = TiendasPromocionesModel;