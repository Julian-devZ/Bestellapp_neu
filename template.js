function showContent(item, category, index) {
  return `
  <div class="container">
    <div class="border">
    <div class="right_part">
    <img src="${item.image}" alt="${item.name}">
   <div class="right_part">
      <h3>${item.name}<p>${item.description}</p></h3>

      </div>
       <div class="right_part3">
      <p>${item.price} €</p>
      <button onclick="addToBasket('${category}', ${index})">Hinzufügen</button>
      
      </div>
      </div>
    </div>
    </div>
  `;
}

function showBasket(item, category, index) {
  return `
  <div class="container">
<div class="border_basket">
 <div class="right_part3">
      <p>${item.name}</p>
       </div>
       <div class="right_part4">
      <button onclick="addamount('${category}', ${index})">+</button>
      ${item.amount}
      <button onclick="lessamount('${category}', ${index})">-</button>

      <p>${(item.price * item.amount).toFixed(2)} €</p>
       </div>
    </div>
    </div>
  `;
}

function updateBasket(index) {
  let item = myBasket[index];
  return `
  
  <div class="items_basket">
  
            <p>${item.name}</p>

            <button onclick="addamount(${index})">+</button>
            ${item.amount}
            <button onclick="lessamount(${index})">-</button>

            <p>${(item.price * item.amount).toFixed(2)} €</p>
            
        </div>
    `;
}

function showTotal(subtotal, delivery, total) {
  return `
    <div class="basket-total">
      <p>Zwischensumme: ${subtotal.toFixed(2)} €</p>
      <p>Lieferkosten: ${delivery.toFixed(2)} €</p>
      <hr>
      <h3>Gesamt: ${total.toFixed(2)} €</h3> 
      <button onclick="Openoverlay()">Bestellen</button>
    </div>
    
  `;
}

function showOverlay() {
  return `

    <div id ="overlay"><p class="border">Sie haben eine Testbestellung abgegeben.</p></div>
   
    `;
}

function emptyBasket() {
  return `
        <h2>Warenkorb</h2>
        <p>Dein Warenkorb ist leer.</p>
        <img class="basket_img" src="assets/images/basket.png" alt="">
 `;
}
