/** ===============================================
* @Name: MODELO PRODUCTOS STOCKS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

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
          type: DataTypes.FLOAT(8.3),
          allowNull: false,
          field: 'cantidad'
        },
        id_tienda:{
          type: DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'id_tienda'
        },
        id_producto:{
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          field: 'id_producto'
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

  }
}
