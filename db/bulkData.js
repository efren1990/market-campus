/** ===============================================
* @Name: BULK DATA
================================================= */
/** @Desc: Datos Masivos para inserción */
// =============================================== //
//# >>>
const categorias = [
  {
    nombre: 'Frutas y Verduras',
    adultos: 0
  },
  {
    nombre: 'Carnes',
    adultos: 0
  },
  {
    nombre: 'Bebidas Licores',
    adultos: 1
  },
  {
    nombre: 'Bebias',
    adultos: 0
  },
  {
    nombre: 'Tabaco',
    adultos: 1
  },
  {
    nombre: 'Dulces y Confiteria',
    adultos: 0
  },
  {
    nombre: 'Granos',
    adultos: 0
  },
  {
    nombre: 'Enlatados',
    adultos: 0
  },
];

const tiendas = [
  {
    nombre: 'D1',
    descripcion: 'Tiendas D1',
    telefono: '111111',
    direccion: 'CR26 #25-25',
    impuestos: 1,
  },
  {
    nombre: 'Ara',
    descripcion: 'Tiendas Ara',
    telefono: '222222',
    direccion: 'CR45 #18-25',
    impuestos: 1,
  },
  {
    nombre: 'Isimo',
    descripcion: 'Tiendas Isimo',
    telefono: '444444',
    direccion: 'Av 16 #25-35a',
    impuestos: 1,
  },
];

const productos = [
  {
    nombre: 'Gaseosa Coca Cola',
    presentacion: '350ml',
    descripcion: 'Gaseosa',
    peso: 350
  },
  {
    nombre: 'Cerveza Club Colombia',
    presentacion: '350ml',
    descripcion: 'Roja',
    peso: 350
  },
  {
    nombre: 'Chorizos Zenu',
    presentacion: 'Ternera',
    descripcion: 'Asado',
    peso: 500
  },
  {
    nombre: 'Gaseosa Manzana Postobon',
    presentacion: '1.5l',
    descripcion: 'Rinde más',
    peso: 1500
  },
  {
    nombre: 'Marlboro Rojo',
    presentacion: 'Cajetica x 10',
    descripcion: 'Rojo',
    peso: 100
  },
  {
    nombre: 'Cocosete',
    presentacion: 'Galleta Barra',
    descripcion: 'Galletas',
    peso: 50
  },
  {
    nombre: 'Gomas Trululu',
    presentacion: 'Paquete x 10',
    descripcion: 'Gomas',
    peso: 50
  },
  {
    nombre: 'Vino Gato Negro',
    presentacion: '750ml',
    descripcion: 'Cavernete',
    peso: 750
  },
  {
    nombre: 'Arroz de la cuesta',
    presentacion: '1000gr',
    descripcion: 'Suelto',
    peso: 1000
  },
  {
    nombre: 'Uva Chilena',
    presentacion: 'Paquete x 1000gr',
    descripcion: 'Verdes y rojas',
    peso: 1000
  },
  {
    nombre: 'Atún Rallado',
    presentacion: 'Paquete x 3',
    descripcion: 'Rallado en agua',
    peso: 280
  },
  {
    nombre: 'Cerveza Aguila',
    presentacion: '1000ml',
    descripcion: 'Litron',
    peso: 500
  },
  {
    nombre: 'Malta Leona',
    presentacion: '255ml',
    descripcion: 'Más vitamina',
    peso: 255
  },
];
module.exports = {
  categorias,
  tiendas,
  productos
}