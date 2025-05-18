import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from "./products/components/all-products/AllProductsComponent";
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AllProductsAdminComponent } from './admin/components/all-products/AllProductsComponent';
import { CartAdminComponent } from './admin/components/cart/cart.component';
import { ProductsDetailsAdminComponent } from './admin/components/products-details/products-details.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:ProductsDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"productsAdmin",component:AllProductsAdminComponent},
  {path:"detailsAdmin/:id",component:ProductsDetailsAdminComponent},
  {path:"cartAdmin",component:CartAdminComponent},
  {path:"**", redirectTo:"products",pathMatch:'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
