const addBtns = document.querySelectorAll('.add-btn')
const orderInvoice = document.getElementById('order-invoice')
const totalPriceSpan = document.getElementById('total-price-span')
let totalPrice = 0
const orderList = document.getElementById('order-list')
const paymentConfirm = document.getElementById('payment-confirm')
const cardForm = document.getElementById('card-details')
const orderBtn = document.getElementsByClassName('order-btn')[0]
const modal = document.getElementById('modal')
addBtns.forEach(function(btn){
    btn.addEventListener('click', addtoCart)
})

function addtoCart(e){
    if(orderInvoice.style.display != 'block'){
        orderInvoice.style.display = 'block'
        orderList.addEventListener('click', removeFromCart)
        paymentConfirm.style.display = 'none'
    }

    const item = e.currentTarget.dataset.item
    calculateTotalPrice(Number(e.currentTarget.dataset.price))
    if (item === 'pizza') {
         orderList.innerHTML += `
            <div class="cart-item">
                <h2>Pizza</h2> <button class="remove-btn" data-item="pizza" data-price="14">remove</button> <span>$14</span>
            </div>`
    } 
    else if (item === 'hamburger') {
         orderList.innerHTML += `
            <div class="cart-item">
                <h2>Hamburger</h2> <button class="remove-btn" data-item="hamburger" data-price="12">remove</button> <span>$12</span>
            </div>`
    }
    else if (item === 'beer') {
         orderList.innerHTML += `
            <div class="cart-item">
                <h2>Beer</h2> <button class="remove-btn" data-item='beer' data-price="12">remove</button> <span>$12</span>
            </div>`
    }
}

function removeFromCart(e){
    if(e.target.classList.contains('remove-btn')){
        const itemToRemove = e.target.parentElement
        calculateTotalPrice(-Number(e.target.dataset.price))
        itemToRemove.remove()
        if(orderList.children.length===0){
        orderInvoice.style.display = 'none'
    }
    }
}

function calculateTotalPrice(price){
    totalPrice+=price
    totalPriceSpan.textContent = "$" + totalPrice
}

cardForm.addEventListener('submit', function (e){
    e.preventDefault()
    modal.style.display = 'none'
    orderInvoice.style.display = 'none'
    paymentConfirm.style.display = 'block'
})

orderBtn.addEventListener('click', function(){
    modal.style.display = 'flex'
})