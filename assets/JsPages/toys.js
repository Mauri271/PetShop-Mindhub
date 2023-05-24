// const {createApp} = Vue;

// const app = createApp({

//   data(){
//     return{
//       arrayEvents:[],
//       id:null,
//       event:{}
//     }
//   },

//   created(){

//     fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
//     .then(res => res.json())
//     .then(data =>{
//       this.arrayEvents = data.events

//       const params = new URLSearchParams(location.search)

//       this.id = params.get(`id`)

//       this.event = this.arrayEvents.find(event=>event._id == this.id)

//       console.log(this.event)


//     }).catch(error => console.log(error))

//   }

// }).mount(`#app`)

const {createApp} = Vue;

const app = createApp ({

    data(){
      return{
        arrayJuguetes:[],
        counter:0,
        juegueteBuscadoPorUsuario:``,
        arrayData:[]
      }
    },

    created(){

      fetch(`https://mindhub-xj03.onrender.com/api/petshop`)
      .then(res => res.json())
      .then(data => {

        this.arrayData = data
       
        this.arrayJuguetes = this.arrayData.filter(e=> e.categoria === "jugueteria" )




        console.log(this.arrayJuguetes)

      })
    },

    computed:{

      filtroJuguetes(){

        let articulo = this.arrayJuguetes

        if(this.juegueteBuscadoPorUsuario){

          articulo = articulo.filter(e=> e.producto.toLowerCase().includes(this.juegueteBuscadoPorUsuario.toLowerCase()))
        }
        
        return articulo
      },

    }
}).mount(`#app`)
