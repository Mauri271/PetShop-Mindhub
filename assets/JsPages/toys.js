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
