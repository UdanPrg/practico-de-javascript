const coupons = [
    {
        name: 'ProductoQueso',
        discount: 10
    },
    {
        name: 'ProductoFresa',
        discount: 15
    },
    {
        name: 'ProductPicante',
        discount: 25
    }
];
function calcularPrecioConDescuentoConCupon(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

function showPriceCoupon(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };
    const userCoupon = coupons.find(isCouponValueValid);
    const resultP = document.getElementById("resultPrice");

    if(!userCoupon){
        resultP.innerText = "El cupón "+ couponValue +" no es valido!";
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuentoConCupon(priceValue, descuento);

        resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}