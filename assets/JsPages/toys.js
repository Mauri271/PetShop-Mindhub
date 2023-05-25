const { createApp } = Vue

createApp({
    data(){
        return{
            articulos: [],
            articulosMostrar: [],
            vModelSearch:"",
            vModelCheck: [],
            arrayCarrito: []
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/petshop")
        .then(response => response.json())
        .then((data) =>{
            this.articulos = data;
            this.articulosMostrar = this.articulos.filter(item => item.categoria == "jugueteria" )
            this.arrayCarrito = this.getLocalStorage() ?? []
        })

    },
    methods: {
        añadirCarrito(id){
            if(this.arrayCarrito.find(articulo => articulo._id == id)){
                this.arrayCarrito = this.arrayCarrito.filter(articulo => articulo._id != id)
            }else {
                const aux = this.articulosMostrar.find(articulo => articulo._id == id)
                this.arrayCarrito.push(aux)
            }
            const json = JSON.stringify(this.arrayCarrito)
            localStorage.setItem("carrito", json)
            alertify.success('se ha añadido el articulo al carrito');
        },
        borrarCarrito(id){
            this.arrayCarrito = this.arrayCarrito.filter(articulo => articulo._id != id)
            const json = JSON.stringify(this.arrayCarrito)
            localStorage.setItem("carrito", json)
        },
        getLocalStorage(){
            return JSON.parse(localStorage.getItem("carrito"))
        },
        vaciarStorage(){
            localStorage.removeItem("carrito")
            this.arrayCarrito = []
        }
    },
    computed: {
        
        filtro(){
            let articulo = this.articulosMostrar

            if(this.vModelSearch){
                articulo = articulo.filter(item => item.producto.toLowerCase().includes(this.vModelSearch.toLowerCase()))
            }
            return articulo
        },
        funcionPrecioTotal(){
            return this.arrayCarrito.reduce((acumulador, item)=> acumulador + item.precio, 0 )
        }
    } 
}).mount('#app');