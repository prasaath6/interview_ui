import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    }, {
        path: 'page2',
        component: Page2Component,
    }, {
        path: 'page3',
        component: Page3Component,
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRouting { }
