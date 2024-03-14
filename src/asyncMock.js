const products = [
    { 
      id: '1', 
      name: 'Agenda floral', 
      price: 15, 
      category: 'agendas', 
      img: 'https://cdnx.jumpseller.com/cuaya/image/44282539/thumb/1000/1000?1704989981', 
      stock: 10, 
      description: 'Agenda con diseño floral'
    },
    { 
      id: '2', 
      name: 'Agenda minimalista', 
      price: 12, 
      category: 'agendas', 
      img: 'https://cdnx.jumpseller.com/bialu-impresiones/image/43743291/resize/610/610?1703024363', 
      stock: 5, 
      description: 'Agenda con diseño minimalista'
    },
    { 
      id: '3', 
      name: 'Agenda creativa', 
      price: 18, 
      category: 'agendas', 
      img: 'https://www.mercepedraza.com/public/16090824782616smGYD4.jpeg', 
      stock: 7, 
      description: 'Agenda con diseño creativo'
    },
  
    { 
      id: '4', 
      name: 'Stickers personalizados', 
      price: 5, 
      category: 'personalizacion', 
      img: 'https://megaimprenta.cl/wp-content/uploads/2022/10/Etiquetas-Adhesivos-o-Stickers-circular-o-redondos-8.jpg', 
      stock: 20, 
      description: 'Stickers personalizados con tus diseños'
    },
    { 
      id: '5', 
      name: 'Planner personalizado', 
      price: 20, 
      category: 'personalizacion', 
      img: 'https://falabella.scene7.com/is/image/Falabella/gsc_112887996_451810_1?wid=1500&hei=1500&qlt=70', 
      stock: 8, 
      description: 'Planner con diseño personalizado'
    },
    { 
      id: '6', 
      name: 'Cuaderno personalizado', 
      price: 10, 
      category: 'personalizacion', 
      img: 'https://fernandacreative.cl/cdn/shop/files/Cuadernobasic_Personalizado.png?v=1704728380', 
      stock: 15, 
      description: 'Cuaderno con diseño personalizado'
    },
    { 
      id: '7', 
      name: 'Stickers vintage', 
      price: 8, 
      category: 'stickers', 
      img: 'https://cdnx.jumpseller.com/tienda-sistape/image/17535184/Sin_ti_tulo1.jpg?1651618248', 
      stock: 15, 
      description: 'Stickers con diseño vintage'
    },
    { 
      id: '8', 
      name: 'Stickers kawaii', 
      price: 6, 
      category: 'stickers', 
      img: 'https://m.media-amazon.com/images/I/81xtxf722AL._AC_SL1500_.jpg', 
      stock: 12, 
      description: 'Stickers con diseño kawaii'
    },
    { 
      id: '9', 
      name: 'Stickers de animales', 
      price: 7, 
      category: 'stickers', 
      img: 'https://stickershop.cl/cdn/shop/products/animales-producto.png?v=1645399535', 
      stock: 20, 
      description: 'Stickers con diseño de animales'
    }
];

export const getProducts = () => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products)
      }, 100)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 1000)
  })
}

export const getProductById = (itemId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === itemId))
      }, 100)
  })
}

