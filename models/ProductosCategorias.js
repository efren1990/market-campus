/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');
const ProductosModel = require('./Productos');
const CategoriasModel = require('./Categorias');

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
          field: 'id_categoria',
          references: {
            model: 'categorias',
            key: 'id'
          }
        },
        id_producto: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'id_producto',
          references: {
            model: 'productos',
            key: 'id'
          }
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
    this.belongsTo(ProductosModel, {foreignKey: 'id_producto', as: 'producto'});
    this.belongsTo(CategoriasModel, { foreignKey: 'id_categoria', as: 'categoria' });
  }
}

//# EXPORTS >>>
module.exports = ProductosCategoriasModel;