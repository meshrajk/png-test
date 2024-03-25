import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { FibanocciComponent } from './components/fibanocci/fibanocci.component';
import { AnagramComponent } from './components/anagram/anagram.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent  },
  { path: 'fibanocci', component: FibanocciComponent},
  { path: 'anagram', component: AnagramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
