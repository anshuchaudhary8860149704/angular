import {NgModule, Component} from '@angular/core';
import { Routes , RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PaymentsComponent } from './payments/payments.component';
import { SubscriptionPlansComponent } from './subscription-plans/subscription-plans.component';
import { ExclusiveOfferComponent } from './exclusive-offer/exclusive-offer.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AuthGuard } from './auth.guard';

const routers: Routes = [
    {path: '' , component: HomeComponent},
    { path: 'faq', component: FaqComponent},
    { path: 'payments', component: PaymentsComponent,canActivate:[AuthGuard]},
    { path: 'exclusiveoffer', component: ExclusiveOfferComponent},
    { path: 'thankyou', component: ThankyouComponent},
    {path: ':id' , component: HomeComponent},
    
    { path: "**",redirectTo:''}
    
    
    
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }
export const routingComponents = [HomeComponent,FaqComponent,PaymentsComponent,ExclusiveOfferComponent,ThankyouComponent]