import { Component } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {

  productId=""
  title=""
  description=""
  rate=""
  category=""
  quantity=""

  addProducts = () =>
  {
    let productData:any = {"productId":this.productId,"title":this.title,"description":this.description,
                            "rate":this.rate,"category":this.category,"quantity":this.quantity}

    console.log(productData)
  }

}
