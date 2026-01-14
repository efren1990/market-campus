/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class TiendasModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Tiendas = super.init(
      {
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        estado: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'estado',
          defaultValue: 1
        },
        nombre: {
          type: DataTypes.STRING(30),
          allowNull: false,
          field: 'nombre'
        },
        descripcion: {
          type: DataTypes.STRING(500),
          allowNull: true,
          field: 'descripcion'
        },
        telefono: {
          type: DataTypes.STRING(20),
          allowNull: false,
          field: 'telefono'
        },
        direccion: {
          type: DataTypes.STRING(120),
          allowNull: false,
          field: 'direccion'
        },
        direccion_anexo: {
          type: DataTypes.STRING(40),
          allowNull: true,
          field: 'direccion_anexo'
        },
        direccion_barrio: {
          type: DataTypes.STRING(25),
          allowNull: true,
          field: 'direccion_barrio'
        },
        calificacion: {
          type: DataTypes.DECIMAL(3.2),
          allowNull: true,
          field: 'clasificacion'
        },
        calificacion_cantidad: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: true,
          field: 'calificacion_cantidad'
        },
        impuestos: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'impuestos'
        },
        dias_trabajados: {
          type: DataTypes.STRING(21),
          allowNull: true,
          field: 'dias_trabajados'
        }
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'tiendas',
        tableName: 'tiendas'
      }
    );

    //# Retorno Obj Modelo >>>
    return Tiendas;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}

//# Exports >>>
module.exports = TiendasModel;
