import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { BasketComponent } from './basket/basket.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ShopComponent } from './shop/shop.component';
import { RevocationComponent } from './revocation/revocation.component';
import { DeliveryComponent } from './Payment/delivery/delivery.component';

const routes: Routes = [
  { path: '', redirectTo: 'Homepage', pathMatch: 'full' },
  { path: 'Conditions', component: ConditionsComponent },
  { path: 'Homepage', component: HomepageComponent },
  { path: 'Basket', component: BasketComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Privacy', component: PrivacyComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Revocation', component: RevocationComponent },
  { path: 'Payment/Delivery', component: DeliveryComponent },
  { path: '**', redirectTo: 'Homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }