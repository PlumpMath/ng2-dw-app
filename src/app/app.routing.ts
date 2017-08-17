import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';

const MAINMENU_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'weather', component: WeatherComponent, canActivate: [AuthGuard] },
  { path: 'movie', component: MovieComponent, canActivate: [AuthGuard] },
  { path: 'currency', component: CurrencyComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
