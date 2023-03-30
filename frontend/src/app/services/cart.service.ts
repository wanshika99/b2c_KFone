import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/Cartitems';
import { Cart } from '../shared/models/Carts';
import { Device } from '../shared/models/Device';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(device:Device):void {
    let cartItem = this.cart.items
    .find(item => item. device.id === device.id);
    if (cartItem)
    return;

    this.cart.items.push(new CartItem(device));
    this.setCartToLocalStorage();
  }

  removeFromCart(deviceId:string):void {
    this.cart.items = this.cart.items.filter(item => item.device.id != deviceId);
    this.setCartToLocalStorage();
  }

  changeQuantity(deviceId:string, quantity:number): void{
    let CartItem = this.cart.items.find(item => item.device.id === deviceId);
    if (!CartItem) return;

    CartItem.quantity = quantity;
    CartItem.price = quantity*CartItem.device.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);


    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
