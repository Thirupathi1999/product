import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user',component:UserComponent},
  {path:'product',component:ProductsComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'contant',component:ContactUsComponent},
  {path:'todo',component:TodoComponent},
  {path:'cart',component:CartComponent},
  {path:'**',component:NotfoundComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
