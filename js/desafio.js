let productoA = false
let productoB = false
let productoC = false
let valorTotal = productoA + productoB + productoC
let totalCupon = (productoA + productoB + productoC) * 0.9
let descuento = 0
debugger
function calcularTotal() {
    productoA = confirm("Desea adquirir este productoA?")
    if (productoA) {
        productoA = 15000
    } else {
        productoA = 0
    }
    productoB = confirm("Desea adquirir este productoB?")
    if (productoB) {
        productoB = 30000
    } else {
        productoB = 0
    }
    productoC = confirm("Desea adquirir este productoC?")
    if (productoC) {
        productoC = 30000
    } else {
        productoC = 0
    }
    descuento = prompt("Ingrese su cupón de descuento:")
    if (descuento==="cuponDel10") {
        return totalCupon
    } else {
        return valorTotal
    }
}
