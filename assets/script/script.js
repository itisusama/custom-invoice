
function handleFormSubmit(event) {

    window.location.href = 'invoice.html';

    // let itemsContainerClass = document.querySelector('.items-container');

    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const booker = document.getElementById("booker").value;
    const shop = document.getElementById("shop").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    
        // Items data
        const itemName1 = document.getElementById("item_name1").value
        const itemQuantity1 = document.getElementById("item_quantity1").value
        const itemPrice1 = document.getElementById("unit_price1").value

        // Items data
        const itemName2 = document.getElementById("item_name2").value
        const itemQuantity2 = document.getElementById("item_quantity2").value
        const itemPrice2 = document.getElementById("unit_price2").value

        // Items data
        const itemName3 = document.getElementById("item_name3").value
        const itemQuantity3 = document.getElementById("item_quantity3").value
        const itemPrice3 = document.getElementById("unit_price3").value

// Store data in session storage
sessionStorage.setItem("booker", booker);
sessionStorage.setItem("shop", shop);
sessionStorage.setItem("phone", phone);
sessionStorage.setItem("date", date);

// Items
sessionStorage.setItem("item_name1", itemName1);
sessionStorage.setItem("item_name2", itemName2);
sessionStorage.setItem("item_name3", itemName3);

sessionStorage.setItem("item_quantity1", itemQuantity1);
sessionStorage.setItem("item_quantity2", itemQuantity2);
sessionStorage.setItem("item_quantity3", itemQuantity3);

sessionStorage.setItem("unit_price1", itemPrice1);
sessionStorage.setItem("unit_price2", itemPrice2);
sessionStorage.setItem("unit_price3", itemPrice3);

window.location.href = "invoice.html";
      
}