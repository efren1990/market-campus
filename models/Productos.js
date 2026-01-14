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
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        estado: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'estado',
          defaultValue: 1
        },
        kit: {
          type: DataTypes.TINYINT,
          allowNull: false,
          field: 'kit',
        },
        barcode: {
          type: DataTypes.STRING(30),
          allowNull: false,
          field: 'barcode',
        },
        nombre: {
          type: DataTypes.STRING(60),
          allowNull: false,
          field: 'nombre',
        },
        presentacion: {
          type: DataTypes.STRING(25),
          allowNull: false,
          field: 'presentacion',
        },
        descripcion: {
          type: DataTypes.STRING(500),
          allowNull: false,
          field: 'descripcion',
        },
        foto: {
          type: DataTypes.STRING(120),
          allowNull: false,
          field: 'foto',
        },
        peso: {
          type: DataTypes.DECIMAL(6.2),
          allowNull: false,
          field: 'peso',
        }
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'productos',
        tableName: 'productos'
      }
    );
    //# Retorno Obj Modelo >>>
    return Productos;
  }
  //# [MET]: Asociaciones >>>
  static associate() {
    
  }
}

//# [MET]: Asociaciones >>>
module.exports = ProductosModel;