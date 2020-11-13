/*
Goal: Close form and reopen form. Be able to toggle between the two
Functionality: Once the X (X has an id of 'close-form') is clicked, it should show hide everything in the class 'form-container', and return 'subscribe to our mail list' with a '+' icon that when clicked will toggle back to the normal close-form
*/

// First: I want to grab the X icon and assign it to a variable, this is what's going to be clicked on
const closeFormBtn = document.querySelector("#close-form")

//Second: I want to grab everything in the class 'form-container', this is what's going to change

const formContainer = document.querySelector(".form-container")

//Third: I want to create a function that will display "subscribe to our mail list" with the '+'

function closeContainer(){
    formContainer.classList.add("hide")
    formContainer.innerText = "Subscribe to our mailing list" 
}

//Fourth: I wan to create an event listener
closeFormBtn.addEventListener("click", closeContainer)



/* 
Goal: Require all form fields to be filled, if not create an alert
Functionality: If user does not add data to form fields, then they should get an alert requiring them to do so. If the form field is filled out, it should return "Thank you for subscribing"
*/

// Use documentSelector to assign variables to id of 'name' and id of 'email'

const name = document.getElementById("name")
const email = document.getElementById("email")
const signUpBtn= document.getElementById("sign-up-btn")

function checkForm(){
    if(name === "" && email === ""){
        formContainer.innerText = "Thank you for subscribing" 
    } else{
        alert ("You need to fill in the form.")
    }
}

signUpBtn.addEventListener("clicked", checkForm)



/*
Goal: When the 'add to cart' button is clicked, it should create a new item in the shopping cart.
Functionality: When someone clicks on 


*/

const addCartBtn = document.querySelector(".add-cart")
const hero = document.querySelector(".hero")

function addToCart(){
    ("cart-display");
    
}

//Create an event listener that when the buttons are clicked, then invoke the function adding them to the 'cart-display' class

addCartBtn.addEventListener("click", addToCart)