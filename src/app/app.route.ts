import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { GalleryComponent } from './components/gallery/gallery.component'; 
import { AboutComponent } from './components/about/about.component'; 

const appRoutes: Routes =
    [
        {
            path: '',
            component: AppHomeComponent
        },
        {
            path: 'gallery',
            component: GalleryComponent,
            canActivate: [AuthGuard]
        },
        {
            path: 'about',
            component: AboutComponent,
            canActivate: [AuthGuard]
        }
    ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
