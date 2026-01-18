/** ===============================================
* @Name: BULK DATA
================================================= */
/** @Desc: Datos Masivos para inserción */
// =============================================== //
//# >>>

// Categorias
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

// Tiendas
// 3 Tiendas
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

// Productos
// 13 Productos
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

// Productos:Stocks 
const productosStocks = [
  {
    cantidad: 10,
	  id_tienda: 1,
	  id_producto: 1,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 50,
	  id_tienda: 1,
	  id_producto: 2,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 30,
	  id_tienda: 1,
	  id_producto: 3,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 150,
	  id_tienda: 1,
	  id_producto: 5,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 82,
	  id_tienda: 1,
	  id_producto: 8,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 10,
	  id_tienda: 2,
	  id_producto: 3,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 50,
	  id_tienda: 3,
	  id_producto: 13,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 30,
	  id_tienda: 3,
	  id_producto: 5,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 150,
	  id_tienda: 3,
	  id_producto: 1,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 82,
	  id_tienda: 3,
	  id_producto: 2,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
  {
    cantidad: 120,
	  id_tienda: 3,
	  id_producto: 12,
	  fecha_ingreso: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).replace('T', ' ')
  },
];

// Productos:Categorias 
const productosCategorias = [
  {
    id_categoria:4 ,	
    id_producto: 1,	
  },
  {
    id_categoria:3 ,	
    id_producto: 2,	
  },
  {
    id_categoria:2 ,	
    id_producto: 3,	
  },
  {
    id_categoria:4 ,	
    id_producto: 4,	
  },
  {
    id_categoria:5 ,	
    id_producto: 5,	
  },
  {
    id_categoria:6 ,	
    id_producto: 6,	
  },
  {
    id_categoria:6 ,	
    id_producto: 7,	
  },
  {
    id_categoria:3 ,	
    id_producto: 8,	
  },
  {
    id_categoria:7 ,	
    id_producto: 9,	
  },
  {
    id_categoria:1 ,	
    id_producto: 10,	
  },
  {
    id_categoria:8 ,	
    id_producto: 11,	
  },
  {
    id_categoria:3 ,	
    id_producto: 12,	
  },
  {
    id_categoria:4 ,	
    id_producto: 13,	
  }
];
// Pedidos
const pedidos = [
  { 	
    instrucciones: 'Casa Verde',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 1,
    direccion	: 'CR18 #25-25',
  },  
  { 	
    instrucciones: 'Casa Blanca',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 1,
    direccion	: 'CR18 #25-25',
  },  
  { 	
    instrucciones: 'Apto 302',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 2,
    direccion	: 'CR56 #17-25',
  },  
  { 	
    instrucciones: 'Apto 505',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 2,
    direccion	: 'CR56 #17-25',
  },  
  { 	
    instrucciones: 'Edificio k21 apto 101',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 3,
    direccion	: 'Av Siempre viva #16',
  },  
  { 	
    instrucciones: 'Edificio Angel apto 666',
    entrega_fecha	: new Date().toLocaleString('sv-SE', { timeZone: 'America/Bogota' }).split('T')[0],
    impuestos: 19,
    id_tienda: 3,
    direccion	: 'Av Siempre viva #16',
  } 
];
// Pedidos Produtos
const pedidos_productos = [
  {
    cantidad: 5,
    valor_unitario: 3000,
    valor_unitario_promocion: 2500,
    total_teorico: 15000,
    total_final: 12500,
    id_promocion: 1,
    id_producto: 1,
    id_pedido: 1,
  },
  {
    cantidad: 10,
    valor_unitario: 4000,
    valor_unitario_promocion: 3500,
    total_teorico: 40000,
    total_final: 35000,
    id_promocion: 1,
    id_producto: 2,
    id_pedido: 2,
  },
  {
    cantidad: 20,
    valor_unitario: 3000,
    valor_unitario_promocion: 2500,
    total_teorico: 60000,
    total_final: 50000,
    id_promocion: 2,
    id_producto: 12,
    id_pedido: 5,
  },
  {
    cantidad: 20,
    valor_unitario: 4000,
    valor_unitario_promocion: 3500,
    total_teorico: 80000,
    total_final: 70000,
    id_promocion: 3,
    id_producto: 2,
    id_pedido: 6,
  },
  {
    cantidad: 8,
    valor_unitario: 3000,
    valor_unitario_promocion: 2500,
    total_teorico: 24000,
    total_final: 20000,
    id_promocion: 2,
    id_producto: 12,
    id_pedido: 6,
  },
];
// Promociones
const promociones = [
  {
    estado: 1,
    nombre: 'Promo 1',
    imagen: '',
    porcentaje: 5,
    dias_semana: "[1, 0, 1, 0, 0, 0, 1]",
  },
  {
    estado: 1,
    nombre: 'Promo 2',
    imagen: '',
    porcentaje: 3,
    dias_semana: "[1, 0, 1, 0, 1, 0, 0]",
  },
  {
    estado: 1,
    nombre: 'Promo 3',
    imagen: '',
    porcentaje: 4,
    dias_semana: "[0, 0, 1, 0, 0, 0, 1]",
  },
];
const tiendasPromociones = [
  {
    estado: 1,
    inicio:	 '2026-01-18 00:00:00',
    fin:	 '2026-01-22 00:00:00',
    id_tienda: 1,
    id_promocion: 1
  },
  {
    estado: 1,
    inicio:	 '2026-01-18 00:00:00',
    fin:	 '2026-01-22 00:00:00',
    id_tienda: 2,
    id_promocion: 1
  },
  {
    estado: 1,
    inicio:	 '2026-01-18 00:00:00',
    fin:	 '2026-01-22 00:00:00',
    id_tienda: 3,
    id_promocion: 1
  },
  {
    estado: 1,
    inicio:	 '2026-01-18 00:00:00',
    fin:	 '2026-01-28 00:00:00',
    id_tienda: 2,
    id_promocion: 3
  },
  {
    estado: 1,
    inicio:	 '2026-01-01 00:00:00',
    fin:	 '2026-02-15 00:00:00',
    id_tienda: 3,
    id_promocion: 2
  },
  {
    estado: 1,
    inicio:	 '2026-01-19 00:00:00',
    fin:	 '2026-02-28 00:00:00',
    id_tienda: 1,
    id_promocion: 3
  }
]
//# Exports >>>
module.exports = {
  categorias,
  tiendas,
  productos,
  productosStocks,
  productosCategorias,
  pedidos,
  promociones,
  pedidos_productos,
  tiendasPromociones
}
