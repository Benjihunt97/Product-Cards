import products from '../products/products.js';

//for loop to loop through product list and
//display it in the product cards
let key = 0;

for(key in products) {
  let img = products[key].img;
  let name = products[key].name;
  let price = products[key].price;
  
  let container = document.getElementById('container');
  
  let content = `
  <div class="card">
        
        <div class="card-header">
          <img class="img" src="${img}" alt="">
        </div>
        
        <div class="cardDom card-body">
          <h1 class="productTitle">${name}</h1>
          <p>£ ${price}</p>
        </div>
  
        <div class="card-footer">
          <button type="button" class="btn btn-primary" onclick="addItem">Add to Cart</button>
        </div>
        
      </div>
  `;
  
  container.innerHTML += content;
}

//Adding items in basket

let basket = document.getElementById('basket');
let items = 0;

function addItem() {
   console.log('working');
};