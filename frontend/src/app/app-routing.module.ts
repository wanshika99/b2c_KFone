import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicePageComponent } from './components/pages/device-page/device-page.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path:'search/:searchTerm',component: HomeComponent},
  {path:'tag/:tag',component: HomeComponent},
  {path:'device/:id', component: DevicePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
