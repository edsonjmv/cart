import faker from 'faker';

const cartText = `<div>You have a ${faker.random.number()} items in your cart</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
