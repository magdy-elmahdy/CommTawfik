import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllProductsAdminComponent } from './admin/components/all-products/AllProductsComponent';
import { CartAdminComponent } from './admin/components/cart/cart.component';
import { ProductAdminComponent } from './admin/components/product/product.component';
import { ProductsDetailsAdminComponent } from './admin/components/products-details/products-details.component';
import { SelectAdminComponent } from './admin/components/select/select.component';
import { SpinnerAdminComponent } from './admin/components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsAdminComponent,
    CartAdminComponent,
    ProductAdminComponent,
    ProductsDetailsAdminComponent,
    SelectAdminComponent,
    SpinnerAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    CartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
