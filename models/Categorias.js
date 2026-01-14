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
        id: {
          type: DataTypes.SMALLINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
          type: DataTypes.STRING(30),
          allowNull: false,
          field: 'nombre'
        },
        adultos: {
          type: DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'adultos'
        }
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
