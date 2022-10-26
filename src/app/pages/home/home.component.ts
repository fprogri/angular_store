import { Component, OnInit } from "@angular/core";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  cols = 1;
  rowHeight = ROWS_HEIGHT[this.cols];
  filter: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  onColumnsUpdated(newValue: any): void {
    this.cols = newValue;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onFiltersUpdated(newValue: any): void {
    this.filter = newValue;
  }
}
