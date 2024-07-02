// function agregarAlCarrito(item){
//     let memoria = JSON.parse(localStorage.getItem("productos"));
//     console.log(memoria);
//     if(!memoria){
//         let nuevoItem = getNuevoProductoParaMemoria(producto);
//         localStorage.setItem("productos",JSON.stringify([nuevoItem]));
//         let nuevaMemoria = memoria;
//     }else{
//         let indiceProducto = memoria.findIndex(producto => producto.id === item.id);
//         if (indiceProducto === -1){
//             nuevaMemoria.push(getNuevoProductoParaMemoria(item));
//         } else{
//             nuevaMemoria[indiceProducto].cantidad ++;
//         }
//         localStorage.setItem("productos",JSON.stringify(nuevaMemoria))
//     }
//     actualizarNuevoCarrito();
// }

// function getNuevoProductoParaMemoria(item){
//     let nuevoItem = item;
//     nuevoItem.cantidad = 1;
//     return nuevoItem;
// }

// let cuentaCarritoElement = document.getElementById("carritocuenta")
// function actualizarNuevoCarrito(){
//     let memoria = JSON.parse(localStorage.getItem("productos"));
//     let cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0 );
//     cuentaCarritoElement.innerText = cuenta;
// }

// actualizarNuevoCarrito();