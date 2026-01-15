/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');
const PedidosModel = require('./Pedidos');
const PromocionesModel = require('./Promociones');
const ProductosModel = require('./Productos');

//# [Model]: Tiendas >>>
class PedidosProductosModel extends Model {

  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
  
    const PedidosProductos = super.init(
      {
        id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        cantidad: {
          type: DataTypes.DECIMAL(9.3).UNSIGNED,
          allowNull: false,
          field: 'cantidad'
        },
        valor_unitario: {
          type: DataTypes.DECIMAL(11.3).UNSIGNED,
          allowNull: false,
          field: 'valor_unitario'
        },
        valor_unitario_promocion: {
          type: DataTypes.DECIMAL(11.3).UNSIGNED,
          allowNull: false,
          field: 'valor_unitario_promocion'
        },
        total_teorico: {
          type: DataTypes.DECIMAL(12.3).UNSIGNED,
          allowNull: false,
          field: 'total_teorico'
        },
        total_final: {
          type: DataTypes.DECIMAL(12.3).UNSIGNED,
          allowNull: false,
          field: 'total_final'
        },
        id_promocion: {
          type: DataTypes.MEDIUMINT.UNSIGNED ,
          allowNull: false,
          field: 'id_promocion',
          references: {
            model: 'promociones',
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
        id_pedido: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          allowNull: false,
          field: 'id_pedido',
          references: {
            model: 'pedidos',
            key: 'id'
          }
        },

      },
      {
        sequelize: sequelizeInstance,
        modelName: 'pedidosProductos',
        tableName: 'pedidosProductos'
      }
    );

    return PedidosProductos;

  }
  
  //# [MET]: Asociaciones >>>
  static associate() {
    this.belongsTo(PromocionesModel, { foreignKey: 'id_promocion', as: 'promocion' });
    this.belongsTo(ProductosModel, { foreignKey: 'id_producto', as: 'producto' });
    this.belongsTo(PedidosModel, { foreignKey: 'id_pedido', as: 'pedido' });
  }
}
//# EXPORTS >>>
module.exports = PedidosProductosModel;
