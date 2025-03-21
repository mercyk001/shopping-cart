document.addEventListener("DOMContentLoaded",function(){
let cart =[];

function addToCart (name, price){
    const existingItem = cart.find(item =>item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.price * qty;
    } else { cart.push({
        name:name,
        price:price,
        qty:1,
        total:price
    })

    }
}

this.getElementsByTagName("button").addEventListener('click', function (){
 const product = this.closest('#product')
 const name = product.querySelector  
})




}) 
    
