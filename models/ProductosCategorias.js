/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class ProductosCategoriasModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const ProductosCategorias = super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        id_categoria: {
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'id_categoria'
        },
        id_producto: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'id_producto'
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'productosCategorias',
        tableName: 'productosCategorias'
      }
    );

    return ProductosCategorias;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
