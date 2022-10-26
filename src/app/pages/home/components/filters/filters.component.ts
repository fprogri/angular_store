import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit {
  categories = ["shoes", "shirts", "socks", "hats"];
  @Output() filters = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFiltersUpdated(newValue: string): void {
    this.filters.emit(newValue);
  }
}
