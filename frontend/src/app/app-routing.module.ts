import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { DevicePageComponent } from './components/pages/device-page/device-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'search/:searchTerm',component: HomeComponent},
  {path:'tag/:tag',component: HomeComponent},
  {path:'device/:id', component: DevicePageComponent},
  {path:'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
