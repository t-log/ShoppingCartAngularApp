import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response)=>{this.productData=response}
    )
  }

  productData:any = []

}
