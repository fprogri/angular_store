import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent implements OnInit {
  sort = "Popular";
  itemsShowCount = 12;
  @Output() columns = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onResultsUpdated(newCount: any): void {
    this.itemsShowCount = newCount;
  }

  onColumnsUpdated(newValue: any): void {
    this.columns.emit(newValue);
  }
}
