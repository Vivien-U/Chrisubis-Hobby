import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ShopComponent } from './shop/shop.component';
import { RevocationComponent } from './revocation/revocation.component';
import { DeliveryComponent } from './payment/delivery/delivery.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Conditions', component: ConditionsComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Basket', component: BasketComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Privacy', component: PrivacyComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'Imprint', component: ImprintComponent },
  { path: 'Shop', component: ShopComponent },
  { path: 'Revocation', component: RevocationComponent },
  { path: 'Payment/Delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }