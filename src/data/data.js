const products = [
  {
    id: 1,
    modelo: "Samsung Galaxy M30",
    descripcion: "Aenean auctor gravida sem.",
    marca: "Samsung",
    imagen:
      "https://media.istockphoto.com/id/1156820317/es/foto/smartphone-samsung-galaxy-m30.jpg?s=612x612&w=0&k=20&c=FwKmweJMX9HUsdlNBao5gRX8Z_7tUJOaFyUISE0SHx4=",
    precio: 1500,
    stock: 5,
  },
  {
    id: 2,
    modelo: "Samsung S8 plus",
    descripcion: "Nulla ut erat id mauris vulputate elementum.",
    marca: "Samsung",
    imagen:
      "https://media.istockphoto.com/id/937787518/es/foto/diferentes-vistas-del-plata-samsung-s8-plus.jpg?s=612x612&w=0&k=20&c=_AVc-tQRLUisv9gtTadSr-gc7wWPaUx55AMNNF3AyR0=",
    precio: 1500,
    stock: 6,
  },
  {
    id: 3,
    modelo: "Samsung Galaxy S20 ultra",
    descripcion: "Aenean auctor gravida sem.",
    marca: "Samsung",
    imagen:
      "https://media.istockphoto.com/id/1224713641/es/foto/samsung-galaxy-s-20-ultra-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=Rf01P3zgcyH2NUCDH3SFjQoKvb4QixOTdB5W0P4Mc-0=",
    precio: 1500,
    stock: 7,
  },
  {
    id: 4,
    modelo: "Samsung Note 8",
    descripcion: "Bateria de 1100Mah",
    marca: "Samsung",
    imagen: "https://media.istockphoto.com/id/937787512/es/foto/diferentes-vistas-de-samsung-negro-nota-8.jpg?s=612x612&w=0&k=20&c=yyz0Gb7tiNfMFPUnKTNEGJNQ9haEq7lJ7EJIU25TD08=",
    precio: 1500,
    stock: 8,
  },
  {
    id: 5,
    modelo: "Iphone 11 pro",
    descripcion: "Sed accumsan felis.",
    marca: "Iphone",
    imagen: "https://media.istockphoto.com/id/1190447864/es/foto/smartphone-apple-iphone-11-pro-gray.jpg?s=612x612&w=0&k=20&c=YU6Tm8a-SydY5r5oYfEq5a4syXk_PFWYNZ04m7bmROM=",
    precio: 1500,
    stock: 9,
  },
  {
    id: 6,
    modelo: "Iphone 11 pro-max",
    descripcion: "In hac habitasse platea dictumst.",
    marca: "Iphone",
    imagen: "https://media.istockphoto.com/id/1190227695/es/foto/smartphone-iphone-11-pro-max-silver.jpg?s=612x612&w=0&k=20&c=DekrB_IALmPa0-BIMnCj6lZLZRG4G-ZhozHeU8uWBZs=",
    precio: 1500,
    stock: 10,
  },
  {
    id: 7,
    modelo: "Iphone 6s",
    descripcion: "Morbi vel lectus in quam fringilla rhoncus.",
    marca: "Iphone",
    imagen: "https://media.istockphoto.com/id/610577176/es/foto/iphone-6s-blanco-y-iphone-7-negro.jpg?s=612x612&w=0&k=20&c=gDv_MiBFYisr9RnUPFJKi5LTA3oB7jUCl-3k2E4vPCw=",
    precio: 1500,
    stock: 5,
  },
  {
    id: 8,
    modelo: "Iphone 13 pro",
    descripcion:
      "et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    marca: "Iphone",
    imagen: "https://media.istockphoto.com/id/1356372494/es/foto/maqueta-de-iphone-13-pro-recientemente-lanzada-con-%C3%A1ngulos-trasero-y-frontal.jpg?s=612x612&w=0&k=20&c=-m__Cp89HnRKZprJuXdR2xnBiQuNIFnOWtvpRu_iXfo=",
    precio: 1500,
    stock: 3,
  },
  {
    id: 9,
    modelo: "Xiaomi MI 11 lite-5g",
    descripcion: "Morbi nec condimentum neque sapien placerat ante.",
    marca: "Xiaomi",
    imagen: "https://media.istockphoto.com/id/1320761354/es/foto/xiaomi-mi-11-lite-5g.jpg?s=612x612&w=0&k=20&c=lRlhC6aeWC2gdQ5FxYeGdNodxC4MVnAHMNo-MlaMuA0=",
    precio: 1500,
    stock: 1,
  },
  {
    id: 10,
    modelo: "Xiaomi Poco M4",
    descripcion: "Quisque obortis vel, dapibus at, diam.",
    marca: "Xiaomi",
    imagen: "https://media.istockphoto.com/id/1436680189/es/foto/primer-plano-del-smartphone-xiaomi-poco-m4-pro-con-su-caja-en-el-fondo.jpg?s=612x612&w=0&k=20&c=acwLLYLrYsbJk4KIS2RpuKFai3Ti8UUtGM-z0ZGdK-8=",
    precio: 1500,
    stock: 2,
  },
  {
    id: 11,
    modelo: "Xiaomi A2 lite",
    descripcion: "Mauris sit amet eros.",
    marca: "Xiaomi",
    imagen: "https://media.istockphoto.com/id/1145665209/es/foto/un-smartphone-xiaomi-a2-lite.jpg?s=612x612&w=0&k=20&c=8PjMVOFYkD43XI3dJixmf1riupTN3nqfGXNRhadDqEw=",
    precio: 1500,
    stock: 4,
  },
];

export const itemFetch = (id) => 
    new Promise((resolve) => {
    setTimeout( () => {
      resolve(id ? products.find(product => product.id === id) : products);
    }, 500);
  });

