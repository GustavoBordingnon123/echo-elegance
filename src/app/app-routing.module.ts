import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // Outras rotas da sua aplicação
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'home', component: HomeComponent }, 
  // Outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
