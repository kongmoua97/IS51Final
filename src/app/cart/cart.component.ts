import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<any> = [];
  inventory: any;
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.inventory = await this.loadInventoryFromJson();
    console.log('this.inventory from ngOninit...', this.inventory);
  }

  async loadInventoryFromJson() {
    const inventory = await this.http.get('assets/inventory.json').toPromise();
    return inventory.json();
  }

}
