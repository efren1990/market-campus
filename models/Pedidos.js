/** ===============================================
* @Name: MODELO TIENDAS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { DataTypes, Model } = require('sequelize');
const TiendasModel = require('./Tiendas');

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
          field: 'instrucciones'
        },
        entrega_fecha: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'entrega_fecha'
        },
        valor_productos: {
          type:  DataTypes.DECIMAL(12.3),
          allowNull: true,
          field: 'valor_productos'
        },
        valor_envio: {
          type:  DataTypes.DECIMAL(10.3),
          allowNull: true,
          field: 'valor_envio'
        },
        valor_descuento: {
          type:  DataTypes.DECIMAL(12.3),
          allowNull: true,
          field: 'valor_descuento'
        },
        valor_cupon: {
          type:  DataTypes.DECIMAL(11.3),
          allowNull: true,
          field: 'valor_cupon'
        },
        impuestos: {
          type:  DataTypes.TINYINT.UNSIGNED,
          allowNull: false,
          field: 'impuestos'
        },
        valor_impuestos: {
          type:  DataTypes.DECIMAL(11.3),
          allowNull: true,
          field: 'valor_impuestos'
        },
        valor_final: {
          type:  DataTypes.DECIMAL(12.3),
          allowNull: true,
          field: 'valor_final'
        },  
        calificacion: {
          type:  DataTypes.DECIMAL(3.2),
          allowNull: true,
          field: 'calificacion'
        },
        id_tienda: {
          type:  DataTypes.SMALLINT.UNSIGNED,
          allowNull: false,
          field: 'id_tienda',
          references: {
            model: 'tiendas',
            key: 'id'
          }
        },
        direccion: {
          type:  DataTypes.STRING(160),
          allowNull: false,
          field: 'direccion'
        },
        valor_comision: {
          type:  DataTypes.DECIMAL(11.3),
          allowNull: true,
          field: 'valor_comision'
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
    this.belongsTo(TiendasModel, { foreignKey: 'id_tienda', as: 'tienda' });
  }
}
module.exports = PedidosModel;