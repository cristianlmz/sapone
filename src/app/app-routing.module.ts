import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: '' , component: HomeComponent, data: { title: 'Sapone'} },
  { path: 'catalog', component: CatalogComponent, data: { title: 'Catalog'} },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact'} },
  { path: 'about', component: AboutComponent, data: { title: 'About Sapone'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
