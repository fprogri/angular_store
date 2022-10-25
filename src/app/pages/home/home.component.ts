import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 4;

  constructor() {}

  ngOnInit(): void {}

  onColumnsUpdated(newValue: any): void {
    this.cols = newValue;
  }
}
