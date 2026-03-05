let headerRef = document.getElementById("header");
let footerRef = document.getElementById("footer");

function createHeader() {
  headerRef.innerHTML += showHeader();
}
function showHeader() {
  return `  
   <header id="header">
    <img src="assets/images/Bestell App- Logo.svg" alt="Logo Bestellapp">
    </header>
    `;
}
function createFooter() {
  footerRef.innerHTML += showFooter();
}
function showFooter() {
  return `  
   <footer id="footer">
   Copyright by Julian Zervas
    </footer>
    `;
}
function createBasket() {
  for (let indexBasket = 0; indexBasket < myBasket.length; indexBasket++) {
    basketRef.innerHTML += showBasket(indexBasket);
  }
}
