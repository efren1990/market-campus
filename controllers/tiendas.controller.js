/** ===============================================
* @Name: CONTROLADOR PRODUCTOS
================================================= */
/** @Desc: */
// =============================================== //
//# IMPORTS >>>
const { request, response } = require('express');
const TiendasPromocionesModel = require('../models/TiendasPromociones');
const TiendasModel = require('../models/Tiendas');
const PromocionesModel = require('../models/Promociones');
//# [CLASS]:  >>>
class TiendasController {
  
  //# [MET]: >>>
  constructor() {
    this.getPromos = this.getPromos.bind(this);
  }

  //# [MET]: >>>
  async getPromos(req=request, res=response) {
    const { dia } = req.query;
    if (!dia || dia < 1 || dia > 7) {
      return res.status(404).json({
        message: 'Debe incluir un día el cual debe estar entre Lunes y Domingo'
      })
    }
    try {
      let tiendas_promociones = await TiendasPromocionesModel.findAll({
        attributes: ['id', 'inicio', 'fin'],
        include: [
          {
            model: TiendasModel,
            as: 'tienda',
            attributes: ['id', 'nombre']
          },
          {
            model: PromocionesModel,
            as: 'promociones',
            attributes: ['id', 'nombre', 'dias_semana']
          }
        ],
        raw: false        
      }) ;
      const indice_dia = dia - 1;
      const hoy = new Date();
      const resultado = {};
      tiendas_promociones.forEach(item => {
        const promo = item.promociones;
        // Promo ?
        if (!promo || !promo.dias_semana) return;
        const dias = JSON.parse(promo.dias_semana);
        // Día ?
        if (dias[indice_dia] !== 1) return;
        // Rango de fechas ?
        if (hoy < new Date(item.inicio) || hoy > new Date(item.fin)) return;
        // Mapeado de datos
        if(!resultado[promo.id]) {
          resultado[promo.id] = {
            id_promocion: promo.id,
            nombre: promo.nombre,
            tiendas: []
          }
        }
        resultado[promo.id].tiendas.push({
          id_tienda: item.tienda.id,
          nombre: item.tienda.nombre,
          inicio: item.inicio,
          fin: item.fin
        });

      })
      const dataResult = Object.values(resultado)
      res.status(200).json({
        message: 'Consultado Correctamente',
        data: dataResult
      });

    } catch (error) {
      console.log(`Error: ${ error }`);
    }
  
  }
}

module.exports = TiendasController;