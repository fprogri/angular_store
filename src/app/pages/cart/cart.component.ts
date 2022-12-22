import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        image:
          "https://cdn-prod.medicalnewstoday.com/content/images/articles/271/271157/bananas-chopped-up-in-a-bowl.jpg",
        name: "Banana",
        price: 3,
        quantity: 5,
        id: 9,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    "image",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  constructor() {}
  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
}
