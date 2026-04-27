import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login';
import { RegisterComponent } from './features/register/register';
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./features/landing/landing')
                .then(m => m.Landing)
    },
    {
        path: 'search',
        loadComponent: () =>
            import('./features/city-search/city-search')
                .then(m => m.CitySearchComponent)
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('./features/about-ecogrid/about-ecogrid')
                .then(m => m.AboutEcogridComponent)
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./features/login/login')
                .then(m => m.LoginComponent)
    },

    {
        path: 'register',
        loadComponent: () =>
            import('./features/register/register')
                .then(m => m.RegisterComponent)
    },
    {
        path: 'analytics',
        loadComponent: () =>
            import('./features/analytics/analytics')
                .then(m => m.AnalyticsComponent)
    }
];