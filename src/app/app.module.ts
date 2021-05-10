import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { AssurenceComponent } from './assurence/assurence.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { RentComponent } from './rent/rent.component';
import { BuyComponent } from './buy/buy.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreateLoginComponent } from './create-login/create-login.component';
import { MenuComponent } from './menu/menu.component';
import { CameraComponent } from './camera/camera.component';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    AbonnementComponent,
    LoginComponent,
    UpdateComponent,
    HomeComponent,
    ProfileComponent,
    BankListComponent,
    AssurenceComponent,
    CatalogueComponent,
    RentComponent,
    BuyComponent,
    CreateBankComponent,
    CreateLoginComponent,
    MenuComponent,
    CameraComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
