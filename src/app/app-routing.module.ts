import { NgModule } from '@angular/core';
// 1. Import Klassen
import { RouterModule, Routes } from '@angular/router';

// 2. Import der Komponenten
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressComponent } from './impress/impress.component';
import { ContentComponent } from './content/content.component';

// 3. Pfadangaben
const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pl', component: ContentComponent},
  {path: 'pl/:id', component: ContentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'impress', component: ImpressComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
