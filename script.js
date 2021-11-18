let usuario;
let pedido;
let cuentaUsuario = 1;


class Usuario {
    constructor(datosUsuario, nombre, apellido, email,edad) {
        this.datosUsuario = datosUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
    }
}
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
const producto1 = new Productos("Vacio", "250");
const producto2 = new Productos("Costilla", "500");
const producto3 = new Productos("Entraña", "200");
const producto4 = new Productos("Chorizo", "300");
producto1.sumaIva();
producto2.sumaIva(); 
producto3.sumaIva(); 
producto4.sumaIva();  

function ingreseDatos(){
    const nombreUsuario = prompt('Ingresa tu nombre:');
    const apellidoUsuario = prompt('Ingrese su apellido:');
    const emailUsuario = prompt('Ingrese su email:')
    const edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    alert ('Bienvenido A CARNES PEHUEN ' + nombreUsuario + " " + apellidoUsuario);
    console.log('Su email es ' + emailUsuario);
    console.log('Tu edad es: ' + edadUsuario );


    usuario = new Usuario (cuentaUsuario, nombreUsuario,apellidoUsuario, emailUsuario, edadUsuario);
    console.log(usuario)

    cuentaUsuario++;
}
ingreseDatos();

let productosSeleccionados = prompt("Selecciona un producto \n 1 - Vacio \n 2 - Costilla \n 3 - Entraña \n 4 - Chorizo");
n
switch (productosSeleccionados) {
    case "1":
        alert('Usted va pagar ' + producto1.precio)
        console.log(producto1);
        break;
    case "2":
        alert('Usted va pagar ' + producto2.precio)
        console.log(producto2);
        break;
    case "3":
        alert('Usted va pagar ' + producto3.precio)
        console.log(producto3 );
        break;
    case "4":
        alert('Usted va pagar ' + producto4.precio)
        console.log(producto3 );
        break;
    default:
    break;
}