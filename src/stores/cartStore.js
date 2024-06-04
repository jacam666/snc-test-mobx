import { makeAutoObservable, observable } from 'mobx';

class CartStore {
    cartItems = [];

    constructor() {
        makeAutoObservable(this, {
            cartItems: observable,
        });
    }

    addToCart(item) {
        this.cartItems.push(item);
        console.log('Current cart items:', this.cartItems);
    }
}

const cartStore = new CartStore();
export default cartStore;