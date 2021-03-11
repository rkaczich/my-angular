import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 1. Animations Modul importieren
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ContentComponent } from './content/content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

// Ländereinstellungen für die Anwendung
import { LOCALE_ID} from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ImpressComponent } from './impress/impress.component';
import { ContactComponent } from './contact/contact.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { Comp1Component } from './c1/comp1/comp1.component';
import { Comp2Component } from './c1/comp2/comp2.component';
import { Subc2Component } from './c1/comp2/subc2/subc2.component';
registerLocaleData(localeDe, localeDeExtra);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ContentComponent,
    ProductListComponent,
    ProductListItemComponent,
    HomeComponent,
    ImpressComponent,
    ContactComponent,
    SearchResultComponent,
    SearchResultItemComponent,
    Comp1Component,
    Comp2Component,
    Subc2Component
  ],
  imports: [
    BrowserModule,
    // 2. Module verfügbar machen
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule,
    ButtonsModule
  ],
  providers: [
    // Bekanntmachung der gewählten Einstellung in der App
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
