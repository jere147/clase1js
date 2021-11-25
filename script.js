let usuario;
let pedido;
let cuentaUsuario = 1;
const arrayDatosUsuario =[];
const tienda = [];  

class Usuario {
constructor(idUsuario, nombre, apellido, email,edad) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    }
}
class Productos {
constructor(idProducto, nombre, precio) {
    this.idProducto = idProducto;
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    }
    sumaIva() {
     this.precio = this.precio * 1.21;
    }
}
tienda.push (new Productos("01", "Vacio", "250"));
tienda.push (new Productos("02", "Costilla", "500"));
tienda.push (new Productos("03", "Entraña", "200"));
tienda.push (new Productos("04", "Chorizo", "300"));
for(const Productos of tienda){
Productos.sumaIva();
}
tienda.sort((a, b) => {
    return a.precio - b.precio;
});
console.log(tienda);

function ingreseDatos(){
    const nombreUsuario = prompt('Ingresa tu nombre:');
    const apellidoUsuario = prompt('Ingrese su apellido:');
    const emailUsuario = prompt('Ingrese su email:')
    const edadUsuario = parseInt(prompt('Ingresa tu edad:'));
    alert ('Bienvenido a Carniceria Pehuen ' + nombreUsuario + " " + apellidoUsuario);
    console.log(`
        Bienvenido su datos son:\n
        Su nombre y apellido : ${nombreUsuario} ${apellidoUsuario}\n
        su edad es: ${edadUsuario}
        Su email es: ${emailUsuario}`);

    usuarioIngresado = new Usuario (cuentaUsuario, nombreUsuario,apellidoUsuario, emailUsuario, edadUsuario);
    console.log(usuarioIngresado)
    
    arrayDatosUsuario.push(usuarioIngresado);
    console.log(arrayDatosUsuario)
    cuentaUsuario++;
}
ingreseDatos();


let productosSeleccionados = prompt("Selecciona un producto \n 1 - Vacio  \n 2 - Costilla \n 3 - Entraña \n 4 - Chorizo");

switch (productosSeleccionados) {
    case "1":
        alert('Usted va pagar ' + tienda[0].precio)
        console.log(tienda[0]);
        break;
    case "2":
        alert('Usted va pagar ' + tienda[1].precio)
        console.log(tienda[1]);
        break;
    case "3":
        alert('Usted va pagar ' + tienda[2].precio)
        console.log(tienda[2]);
        break;
    case "4":
        alert('Usted va pagar ' + tienda[3].precio)
        console.log(tienda[3]);
        break;
    default:
    break;
}

for(const saludo of arrayDatosUsuario){
    let contenedor = document.createElement("h2");
    let contenedorTitulo = document.createElement("h3");

    contenedor.innerHTML = `<h2> Hola ${saludo.nombre} ${saludo.apellido}, Tu Pedido sera agendado!<h2>`;
    contenedorTitulo.innerHTML = `<h3>Nuestros productos son:</h3>`
    document.body.appendChild(contenedor);
    document.body.appendChild(contenedorTitulo);
}

for (const producto of tienda) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
                            <div style="border: 1px solid;">
                            <p>  Producto: <b>${producto.nombre}</b></p>
                            <b> $ ${producto.precio}</b>
                            <br>
                            <button>COMPRAR</button></div>`;
    document.body.appendChild(contenedor);
    
}