import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContantComponent } from './contant/contant.component';
import { GallaryComponent } from './gallary/gallary.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContantComponent,
    GallaryComponent,
    UserComponent,
    AboutComponent,
    ContactUsComponent,
    NotfoundComponent,
    ProductsComponent,
    CartComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
