import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoute:Routes = [{path:"",component:AddProductsComponent},
                        {path:"add",component:AddProductsComponent},
                        {path:"view",component:ViewAllProductsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent,
    ViewAllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
