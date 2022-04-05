console.log("What it do?");

console.log(customers[0]);

const root = document.getElementById("root");
console.log("deeply rooted");

for (let customer of customers) {
  console.log(customer);
  const customerCard = document.createElement("div");
  customerCard.classList.add("customer-card");

  root.appendChild(customerCard);
  customerCard.innerHTML = `
  <img src="${customer.picture.thumbnail}"/>
  
  <h2 class=name> ${customer.name.first} ${customer.name.last}</h2>
  <div>${customer.location.street.number} ${customer.location.street.name}</div>
  <div>${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}</div>
  





`;
  // function capitalizeFirstLetter() {
  //     return customer.name.title.charAt(0).toUpperCase() + customerCard.slice(1);
}
