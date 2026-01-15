/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model, TINYINT } = require('sequelize');

//# [Model]: Tiendas >>>
class PromocionesModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Promociones = super.init(
      {
        id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        }, 
        estado: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'estado'
        }, 
        nombre: {
          type: DataTypes.STRING(40),
          allowNull: false,
          field: 'nombre'
        }, 
        imagen: {
          type: DataTypes.STRING(120),
          allowNull: false,
          field: 'imagen'
        }, 
        porcentaje: {
          type: TINYINT.UNSIGNED,
          allowNull: false,
          field: 'porcentaje'
        }, 
        dias_semana: {
          type: DataTypes.STRING(21),
          allowNull: false,
          field: 'dias_semana'
        }, 
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

//# EXPORTS >>>
module.exports = PromocionesModel;
