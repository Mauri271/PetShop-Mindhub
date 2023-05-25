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
            const nombreUsuario = this.nombre
            this.datosIngresados.push({
                nombre: this.nombre,
                apellido: this.apellido,
                mensaje: this.mensaje
            })
            this.resetearFormulario()
            this.mostrarDatosIngresados = true
                alertify.alert("Su consulta se envió correctamente", `En breve nos comunicaremos con Usted. Muchas gracias ${nombreUsuario}`).set('closable', false)
        },
        resetearFormulario() {
            this.nombre = this.apellido = this.telefono = this.email = this.mascota = this.mensaje = ''
        }
    },
}).mount('#app')