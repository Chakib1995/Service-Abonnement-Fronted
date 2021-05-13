import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import{ CameraComponent} from './camera/camera.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { AssurenceComponent } from './assurence/assurence.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { BuyComponent } from './buy/buy.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RentComponent } from './rent/rent.component';
import { UpdateComponent } from './update/update.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:'', component:MenuComponent, children:[
    {path: 'camera' , component:CameraComponent},
    {path: 'registre' , component:CreateUserComponent},
    {path: 'showUser' , component:UserListComponent},
    {path: 'login' , component:LoginComponent},
    {path: 'update/:id' , component:UpdateComponent},
    {path: 'home' , component:HomeComponent},
    {path: 'profile' , component:ProfileComponent},
    {path: 'bank' , component:BankListComponent},
    {path: 'catalogue' , component:CatalogueComponent},
    {path: 'assurence' , component:AssurenceComponent},
    {path: 'rent' , component:RentComponent},
    {path: 'buy' , component:BuyComponent},
    {path: 'registreBank' , component:CreateBankComponent},
    {path: 'abonnement' , component:AbonnementComponent}]},
    
  
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
