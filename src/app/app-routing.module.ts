import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './pages/home/home.component';
import { CreateComponent} from './pages/create/create.component';
import { DetailsComponent} from './pages/details/details.component';
import { UpdateComponent} from './pages/update/update.component';

const routes: Routes = [
  { path: 'pages', redirectTo: 'pages/home', pathMatch: 'full'},
  { path: 'pages/home', component: HomeComponent },
  { path: 'pages/create', component: CreateComponent },
  { path: 'pages/details/:productId', component: DetailsComponent },
  { path: 'pages/update/:productId', component: UpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
