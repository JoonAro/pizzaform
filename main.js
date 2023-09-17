//Get customer name
// if user doesn't choose a size priceDisplayHtml2 appears and stops you from moving on.
const priceDisplayHtml2 = document.querySelector('#priceDisplay2');
const priceDisplayHtml = document.querySelector('#priceDisplay');
//every topping value
const toppingOne = document.querySelector('#topping1');
const toppingTwo = document.querySelector('#topping2');
const toppingThree = document.querySelector('#topping3');
const toppingFour = document.querySelector('#topping4');
const toppingFive = document.querySelector('#topping5');
const toppingSix = document.querySelector('#topping6');
const toppingSeven = document.querySelector('#topping7');
const toppingEight = document.querySelector('#topping8');
const toppingNine = document.querySelector('#topping9');
const toppingTen = document.querySelector('#topping10');
const toppingEleven = document.querySelector('#topping11');
const toppingTwelve = document.querySelector('#topping12');
//zeropPrice is the content of priceDisplay2
const zeroPrice = "Choose the pizza size first!";
function priceCalc() {
    //pizza price values added to variables
    const small = 7.50;
    const medium = 10.50;
    const large = 12.50;
    const XL = 15.50;
    //making sure pizzaPrice is 0 after a change in the html
    let pizzaPrice = 0;
    //if radiobutton is checked the pizzaPrice will take that value.
    //find size values inside table. see if it's checked
        if (document.querySelector('#serving2').checked) {
        pizzaPrice += small;
        }else if (document.querySelector('#serving4').checked === true) {
        pizzaPrice += medium;
        }else if (document.querySelector('#serving6').checked === true) {
        pizzaPrice += large;
        }else if (document.querySelector('#serving8').checked === true) {
        pizzaPrice += XL;
        }

    

//buttonsChecked will get the ammount of toppings or checkboxes checked
let buttonsChecked = 0;
//making sure buttonsChecked is 0 after a change
//incase user doesn't choose a size first: nothing will run in else statement(rest of the function)
if (pizzaPrice === 0) {
    const priceDisplayHtml2 = document.querySelector('#priceDisplay2');
    priceDisplayHtml2.textContent = zeroPrice;
}   else {
   if (toppingOne.checked) {
        buttonsChecked += 1;
   }
    if (toppingTwo.checked) {
        buttonsChecked += 1;
    }
    if (toppingThree.checked) {
        buttonsChecked += 1;
    }
    if (toppingFour.checked) {
        buttonsChecked += 1;
    }
    if (toppingFive.checked) {
        buttonsChecked += 1;
    }
    if (toppingSix.checked) {
        buttonsChecked += 1;
    }
    if (toppingSeven.checked) {
        buttonsChecked += 1;
    }
    if (toppingEight.checked) {
        buttonsChecked += 1;
    }
    if (toppingNine.checked) {
        buttonsChecked += 1;
    }
    if (toppingTen.checked) {
        buttonsChecked += 1;
    }
    if (toppingEleven.checked) {
        buttonsChecked += 1;
    }
    if (toppingTwelve.checked) {
        buttonsChecked += 1;
    }
//Getting the extra price for more than 4 toppings
if(buttonsChecked > 4) {
    pizzaPrice = pizzaPrice + (buttonsChecked - 4) * 0.5;
}
//possible delivery price
let deliveryPrice = 0;
    if (document.querySelector('#delivery5').checked) {
        deliveryPrice += 5;
        }else if (document.querySelector('#restaurant0').checked) {
        deliveryPrice = 0;
        }else if (document.querySelector('#pickup0').checked) {
        deliveryPrice = 0;
        }
pizzaPrice += deliveryPrice;
let pizzaPrice2 = pizzaPrice.toString();
priceDisplayHtml.textContent=pizzaPrice2;
//getting rid of error message
if (priceDisplayHtml2.textContent.length > 0)
priceDisplayHtml2.textContent = "";
} 
}
