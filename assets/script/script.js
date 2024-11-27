let textContainerClass = document.querySelector('.text-container');
let itemsContainerClass = document.querySelector('.items-container');

const textContainerData = [
    { id: 1, booker: 'Ahsan' },
    { id: 2, shop: 'Ali Shop' },
    { id: 3, phone: '03074518566' },
    { id: 4, date: '27/11/2024' },
]

const itemContainerData = [
    { id: 1, item: 'Shampoo (S)' },
    { id: 2, qty: 12 },
    { id: 3, price: 200 },
    { id: 4, item: '' },
    { id: 5, qty: ''},
    { id: 6, price: '' },
    { id: 7, item: '' },
    { id: 8, qty: '' },
    { id: 9, price: '' },
    { id: 10, item: '' },
    { id: 11, qty: '' },
    { id: 12, price: '' },
]

let textContainerClassFillData = `
    <small class="booker-name">${textContainerData[0].booker}</small>
    <small class="shop-name">${textContainerData[1].shop}</small>
    <small class="ph">${textContainerData[2].phone}</small>
    <small class="invoice-date">${textContainerData[3].date}</small>
`

let item_number1 = 'one'
let item_number2 = 'two'
let item_number3 = 'three'
let item_number4 = 'four'

let itemsContainerClassFillData = `
        <div class="item-${item_number1}">
            <small>${itemContainerData[0].item}</small>
            <small>${itemContainerData[1].qty}</small>
            <small>${itemContainerData[2].price}</small>
         </div>
        <div class="item-${item_number2}">
            <small>${itemContainerData[3].item}</small>
            <small>${itemContainerData[4].qty}</small>
            <small>${itemContainerData[5].price}</small>
         </div>
        <div class="item-${item_number3}">
            <small>${itemContainerData[6].item}</small>
            <small>${itemContainerData[7].qty}</small>
            <small>${itemContainerData[8].price}</small>
         </div>
        <div class="item-${item_number4}">
            <small>${itemContainerData[9].item}</small>
            <small>${itemContainerData[10].qty}</small>
            <small>${itemContainerData[11].price}</small>
         </div>
`



textContainerClass.innerHTML = textContainerClassFillData
itemsContainerClass.innerHTML = itemsContainerClassFillData