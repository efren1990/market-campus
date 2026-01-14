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
