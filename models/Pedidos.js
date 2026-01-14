/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');

//# [Model]: Tiendas >>>
class PedidosModel extends Model {
  //# [MET]: Incializador >>>
  static initialize(sequelizeInstance) {
    const Pedidos = super.init(
      {
        id: {
          type: DataTypes.MEDIUMINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true
        },
        instrucciones: {
          type: DataTypes.STRING(500),
          allowNull: false,
          field: ''
        },
        entrega_fecha: {
          type: DataTypes.DATE,
          allowNull: false,
          field: ''
        },
        valor_productos: {
          type:  DataTypes.FLOAT(12.3),
          allowNull: false,
          field: ''
        },
        valor_envio: {
          type:  DataTypes.FLOAT(10.3),
          allowNull: false,
          field: ''
        },
        valor_descuento: {
          type:  DataTypes.FLOAT(12.3),
          allowNull: false,
          field: ''
        },
        valor_cupon: {
          type:  DataTypes.FLOAT(11.3),
          allowNull: false,
          field: ''
        },
        impuestos: {
          type:  tiny,
          allowNull: false,
          field: ''
        },
        valor_impuestos: {
          type:  DataTypes.FLOAT(11.3),
          allowNull: false,
          field: ''
        },
        valor_final: {
          type:  DataTypes.FLOAT(12.3),
          allowNull: false,
          field: ''
        },
        calificación: {
          type:  DataTypes.FLOAT(3.2),
          allowNull: false,
          field: ''
        },
        id_tienda: {
          type:  smallint,
          allowNull: false,
          field: ''
        },
        dirección: {
          type:  varchar 160,
          allowNull: false,
          field: ''
        },
        valor_comision: {
          type:  DataTypes.FLOAT(11.3),
          allowNull: false,
          field: ''
        },
      },
      {
        sequelize: sequelizeInstance,
        modelName: 'pedidos',
        tableName: 'pedidos'
      }
    );

    return Pedidos;

  }
  //# [MET]: Asociaciones >>>
  static associate() {

  }
}
