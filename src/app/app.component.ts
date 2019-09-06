import { Component, OnInit } from "@angular/core";
import { Product } from './daten-model/product';
import { Family } from './daten-model/family';
import { Location } from './daten-model/location';
import { Transaction } from './daten-model/transaction';
import { DataService } from './data.service';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public products: Product [] = [];
  public families: Family [] = [];
  public locations: Location [] = [];
  public transactions: Transaction [] = [];

  baseUrl: 'http://localhost:3000';

  constructor(private dataServ: DataService) {}
  ngOnInit() {
    this.getProducts();
    this.getFamilies();
    this.getLocations();
    this.getTransactions();
  }

  public getProducts() {
     return this.dataServ.get_products().subscribe((res: Product []) => {
     this.products = res;
     });
  }
  public getFamilies() {
    return this.dataServ.get_families().subscribe((res: Family []) => {
    this.families = res;
    });
 }
 public getLocations() {
  return this.dataServ.get_locations().subscribe((res: Location []) => {
    this.locations = res;
  });
}
public getTransactions() {
  return this.dataServ.get_transactions().subscribe((res: Transaction []) => {
  this.transactions = res;
  });
}
}
