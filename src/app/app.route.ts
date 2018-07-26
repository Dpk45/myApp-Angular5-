import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { GalleryComponent } from './components/gallery/gallery.component'; 

const appRoutes: Routes =
    [
        {
            path: '',
            component: AppHomeComponent
        },
        {
            path: 'gallery',
            component: GalleryComponent
        }
    ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
