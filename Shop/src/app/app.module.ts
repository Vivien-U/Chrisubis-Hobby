import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPopper } from 'angular-popper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ShopComponent } from './shop/shop.component';
import { RevocationComponent } from './revocation/revocation.component';
import { DeliveryComponent } from './payment/delivery/delivery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasketComponent,
    ContactComponent,
    PrivacyComponent,
    ConditionsComponent,
    FooterComponent,
    HeaderComponent,
    ImprintComponent,
    ShopComponent,
    RevocationComponent,
    DeliveryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPopper,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
