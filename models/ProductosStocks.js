/** ===============================================
* @Name: MODELO PRODUCTOS STOCKS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');
const TiendasModel = require('./Tiendas');
const ProductosModel = require('./Productos');

//# [Model]: Tiendas >>>
class ProductosStocksModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const ProductosStocks = super.init(
      {
        id:{
          type: DataTypes.MEDIUMINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        cantidad:{
          type: DataTypes.DECIMAL(8.3),
          allowNull: false,
          field: 'cantidad'
        },
        id_tienda:{
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'id_tienda',
          references: {
            model: 'tiendas',
            key: 'id'
          }
        },
        id_producto:{
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'id_producto',
          references: {
            model: 'productos',
            key: 'id'
          }
        },
        fecha_ingreso:{
          type: DataTypes.DATE,
          allowNull: false,
          field: 'fecha_ingreso'
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'productosStocks',
        tableName: 'productosStocks'
      }
    );

    return ProductosStocks;

  }
  //# [MET]: Asociaciones >>>
  static associate() {
    this.belongsTo(TiendasModel, { foreignKey: 'id_tienda', as: 'tienda' });
    this.belongsTo(ProductosModel, { foreignKey: 'id_producto', as: 'producto' });
  }
}

//# EXPORTS >>>
module.exports = ProductosStocksModel;
