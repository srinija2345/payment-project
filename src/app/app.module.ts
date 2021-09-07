import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { HeaderComponent } from './header/header.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountComponent } from './account/account.component';
import { TransdetailsComponent } from './transdetails/transdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     HeaderComponent,
     NavitemsComponent,
     TransactionComponent,
     AccountComponent,
     TransdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path:"login",component:LoginComponent  
    },
    {
      path:"transaction", component:TransactionComponent
    },
    {
      path:"account", component:AccountComponent 
    },
    {
      path:'transdetails', component:TransdetailsComponent
    },
    {
      path:'', component:LoginComponent
    }
    

  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
