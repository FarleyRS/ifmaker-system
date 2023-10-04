import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { MemberComponent } from './Pages/dashboard/member/member.component';
import { PontoComponent } from './Pages/dashboard/ponto/ponto.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'in/dashboard', component: MemberComponent },
  { path: 'in/ponto', component: PontoComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
