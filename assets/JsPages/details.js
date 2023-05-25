const { createApp } = Vue;

createApp({
    data(){
        return{
            arrayProductos:[],
            id:null,
            producto:{}
        }
    },

    created(){
        fetch("https://mindhub-xj03.onrender.com/api/petshop")
        .then(res => res.json())
        .then(data => {
            
            this.arrayProductos = data

            const params = new URLSearchParams(location.search);
            const idParams = params.get(`id`)

            this.producto = this.arrayProductos.find((articulo => articulo._id == idParams))

            console.log(this.arrayProductos)

            document.title = `Details / ${this.arrayProductos.name }`

          

            console.log(this.producto)
            console.log(idParams)

           this.producto = this.arrayProductos.find()
        }).catch(error => console.log(error))
    }
}).mount(`#app`)




