import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [
      { 
        id: '0',
        voto: 0,
        producto: 'Producto 1' , 
        descripcion: "Every day is taco ipsum tuesday. It’s a wonderful morning for breakfast tacos. Josh’s taco shack is the best taco shack."
      },
      { 
        id: '1',
        voto: 0,
        producto: 'Producto 2' ,
        descripcion: "These tacos are lit. These tacos are lit . Yeah, apparently the taco shack was robbed these taco are li these yeah appar"
      },
      { 
        id: '2',
        voto: 0,
        producto: 'Producto 3' ,
        descripcion: "Um, Tabasco? No thanks, do you have any Cholula? Tacos, tacos, tacos. It’s taco Tuesday Monday. Give me all your tacos."},
      { 
        id: '3',
        voto: 0,
        producto: 'Producto 4' ,
        descripcion: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo ne another on a vertical rotisserie cooked "},
      { 
        id: '4',
        voto: 0,
        producto: 'Producto 5' ,
        descripcion: "These tacos are lit. These tacos are lit. Yeah, apparently the taco shack was robbed tortilla to the hard taco shell."
      },
      { 
        id: '5',
        voto: 0,
        producto: 'Producto 6' ,
        descripcion: " Side of rice and beans, please. You see, the refried beans are really just the adhesive necessary to apply the soft "},
      { 
        id: '6',
        voto: 0,
        producto: 'Producto 7' ,
        descripcion: "Um, Tabasco? No thanks, do you have any Cholula? Tacos, tacos, tacos. tortilla to the hard taco shell. tortilla to the"
      },
      { 
        id: '7',
        voto: 0,
        producto: 'Producto 8' ,
        descripcion: "Every day is taco ipsum tuesday. It’s a wonderful morning for breakfast tacos. Josh’s taco shack is the best taco"
      },
    ]
  },
  getters: {

    getProducts( state ) {
      return state.productos;
    }

  },
  mutations: {
    
    votacion( state, id ){
//       state.productos[id].voto++;

      state.productos.forEach( (element, indice) => {
        if( element.id === id ) state.productos[indice].voto++
      })
    }

  },
  actions: {
  },
  modules: {
  }
})
