

// styling

let getcardText = document.querySelectorAll("#cardText");

for(let i = 0; i<getcardText.length; i++){
    getcardText[i].style.fontSize = "14px";
}


let gettwelve = document.querySelectorAll("#twelve");

for(let z = 0; z<gettwelve.length; z++){
    gettwelve[z].style.fontSize = "12px"

};


let getbgFirst =document.querySelectorAll(".bg-frst");
for(let y = 0; y<getbgFirst.length; y++){
getbgFirst[y].style.backgroundColor = "#F5F7FA"
}




let getimgCard = document.getElementById("imgCard");
getimgCard.style.backgroundColor = "#EEF1F6";



let getgetCardTwo = document.getElementById("getCardTwo");

getgetCardTwo.style.backgroundColor = "#222934";



let getFooter = document.getElementById("footer");

getFooter.style.backgroundColor = "#222934";





let getInputBorder = document.getElementById("inputBorder");

getInputBorder.style.border = "1px solid #E1D9D1";





let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

document.querySelectorAll('.addToCartBtn').forEach((btn) => {
  btn.addEventListener('click', function() {
    // Get product info from the card
    let productCard = btn.closest('.container');
    let productName = productCard.querySelector('p').innerText;
    let productPrice = productCard.querySelector('h6').innerText;

    // Add the product to cart
    cartItems.push({
      name: productName,
      price: productPrice
    });

    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert(`${productName} has been added to your cart!`);
  });
});





