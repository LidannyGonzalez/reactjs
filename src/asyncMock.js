const products = {
    agendas: [
      { 
        id: '1', 
        name: 'Agenda floral', 
        price: 15, 
        category: 'agendas', 
        img: 'https://example.com/agenda-floral.jpg', 
        stock: 10, 
        description: 'Agenda con diseño floral'
      },
      { 
        id: '2', 
        name: 'Agenda minimalista', 
        price: 12, 
        category: 'agendas', 
        img: 'https://example.com/agenda-minimalista.jpg', 
        stock: 5, 
        description: 'Agenda con diseño minimalista'
      },
      { 
        id: '3', 
        name: 'Agenda creativa', 
        price: 18, 
        category: 'agendas', 
        img: 'https://example.com/agenda-creativa.jpg', 
        stock: 7, 
        description: 'Agenda con diseño creativo'
      }
    ],
    personalizacion: [
      { 
        id: '4', 
        name: 'Stickers personalizados', 
        price: 5, 
        category: 'personalizacion', 
        img: 'https://example.com/stickers-personalizados.jpg', 
        stock: 20, 
        description: 'Stickers personalizados con tus diseños'
      },
      { 
        id: '5', 
        name: 'Planner personalizado', 
        price: 20, 
        category: 'personalizacion', 
        img: 'https://example.com/planner-personalizado.jpg', 
        stock: 8, 
        description: 'Planner con diseño personalizado'
      },
      { 
        id: '6', 
        name: 'Cuaderno personalizado', 
        price: 10, 
        category: 'personalizacion', 
        img: 'https://example.com/cuaderno-personalizado.jpg', 
        stock: 15, 
        description: 'Cuaderno con diseño personalizado'
      }
    ],
    stickers: [
      { 
        id: '7', 
        name: 'Stickers vintage', 
        price: 8, 
        category: 'stickers', 
        img: 'https://example.com/stickers-vintage.jpg', 
        stock: 15, 
        description: 'Stickers con diseño vintage'
      },
      { 
        id: '8', 
        name: 'Stickers kawaii', 
        price: 6, 
        category: 'stickers', 
        img: 'https://example.com/stickers-kawaii.jpg', 
        stock: 12, 
        description: 'Stickers con diseño kawaii'
      },
      { 
        id: '9', 
        name: 'Stickers de animales', 
        price: 7, 
        category: 'stickers', 
        img: 'https://example.com/stickers-animales.jpg', 
        stock: 20, 
        description: 'Stickers con diseño de animales'
      }
    ]
  };
  
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