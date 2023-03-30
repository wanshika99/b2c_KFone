import { Device } from "./Device";

export class CartItem{
  constructor(public device:Device) {
  }
  quantity:number = 1;
  price:number = this.device.price;
}
