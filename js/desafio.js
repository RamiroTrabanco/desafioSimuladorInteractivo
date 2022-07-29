debugger
let productoA = 15000
let productoB = 30000
let productoC = 30000

let verdadero = true
let falso = false

while (verdadero) {
    if(confirm("Deseas adquirir los productos?")) {
        calcularTotal()
    } else {
        break;
    }
}

function calcularTotal() {
    let total = 0

    let comprarProductoA = confirm("Desea adquirir este productoA?")
    if (comprarProductoA) {
        total += productoA
    }
    
    let comprarProductoB = confirm("Desea adquirir este productoB?")
    if (comprarProductoB) {
        total += productoB
    }
    
    let comprarProductoC = confirm("Desea adquirir este productoC?")
    if (comprarProductoC) {
        total += productoC
    }
    
    let descuento = prompt("Ingrese su cupón de descuento")
    if (descuento==="cuponDel10") {
        console.log("El total es $", total * 0.9)
    } else {
        console.log("El total es $", total)
    }
}