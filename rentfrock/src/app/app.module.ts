import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeBoxComponent } from './welcome-box/welcome-box.component';
import { StyleSummaryComponent } from './style-summary/style-summary.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { ExclusiveOfferComponent } from './exclusive-offer/exclusive-offer.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HttpClientModule} from '@angular/common/http';
  import { from } from 'rxjs';
import { StylesummaryService } from './userData.service';
import { UserPlansService } from './user-plans.service';
import { AuthGuard } from './auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeBoxComponent,
    StyleSummaryComponent,
    SubscriptionPlansComponent,
    ExclusiveOfferComponent,
    FooterComponent,
    
    routingComponents,
    
    ThankyouComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,UserPlansService,StylesummaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
