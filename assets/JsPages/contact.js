const {createApp} = Vue 
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

createApp({

    data(){
        return {
            datosContacto: {},
            open: false
        }
    },

    created(){
        
    },

    methods: {
        enviarDatosFormulario(datos) {
            this.open = true
            console.log(this.open);
        }
    },
  
}).mount('#app')