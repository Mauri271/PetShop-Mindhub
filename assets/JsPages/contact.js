const {createApp} = Vue 

createApp({
    data(){
        return {
            open: false,
            hayDatosIngresados: false,
            mostrarDatosIngresados: false,
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            mascota: '',
            mensaje: '',
            datosIngresados: []
        }
    },
    computed: {
        validarDatosIngresados() {
            this.hayDatosIngresados = this.nombre != '' && this.apellido != '' && this.mensaje != ''
        }
    },
    methods: {
        enviarDatosFormulario() {
            this.datosIngresados.push({
                nombre: this.nombre,
                apellido: this.apellido,
                mensaje: this.mensaje
            })
            this.resetearFormulario()
            this.mostrarDatosIngresados = true
        },
        resetearFormulario() {
            this.nombre = this.apellido = this.telefono = this.email = this.mascota = this.mensaje = ''
        }
    },
}).mount('#app')