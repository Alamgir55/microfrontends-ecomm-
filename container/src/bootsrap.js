import { mount as productsMount } from 'products/ProudctsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('Container!');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));