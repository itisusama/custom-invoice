
function handleFormSubmit(event) {

    window.location.href = 'invoice.html';

    // let itemsContainerClass = document.querySelector('.items-container');

    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const booker = document.getElementById("booker").value;
    const shop = document.getElementById("shop").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    
// const itemContainerData = [
//     { id: 1, item: 'Shampoo (S)' },
//     { id: 2, qty: 12 },
//     { id: 3, price: 200 },
//     { id: 4, item: '' },
//     { id: 5, qty: ''},
//     { id: 6, price: '' },
//     { id: 7, item: '' },
//     { id: 8, qty: '' },
//     { id: 9, price: '' },
//     { id: 10, item: '' },
//     { id: 11, qty: '' },
//     { id: 12, price: '' },
// ]

// Store data in session storage
sessionStorage.setItem("booker", booker);
sessionStorage.setItem("shop", shop);
sessionStorage.setItem("phone", phone);
sessionStorage.setItem("date", date);

// let item_number1 = 'one'
// let item_number2 = 'two'
// let item_number3 = 'three'
// let item_number4 = 'four'

// let itemsContainerClassFillData = `
//         <div class="item-${item_number1}">
//             <small>${itemContainerData[0].item}</small>
//             <small>${itemContainerData[1].qty}</small>
//             <small>${itemContainerData[2].price}</small>
//          </div>
//         <div class="item-${item_number2}">
//             <small>${itemContainerData[3].item}</small>
//             <small>${itemContainerData[4].qty}</small>
//             <small>${itemContainerData[5].price}</small>
//          </div>
//         <div class="item-${item_number3}">
//             <small>${itemContainerData[6].item}</small>
//             <small>${itemContainerData[7].qty}</small>
//             <small>${itemContainerData[8].price}</small>
//          </div>
//         <div class="item-${item_number4}">
//             <small>${itemContainerData[9].item}</small>
//             <small>${itemContainerData[10].qty}</small>
//             <small>${itemContainerData[11].price}</small>
//          </div>
// `

window.location.href = "invoice.html";
// itemsContainerClass.innerHTML = itemsContainerClassFillDat
   
   
}