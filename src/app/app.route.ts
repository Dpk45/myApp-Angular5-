import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './app-home/app-home.component'

const appRoutes: Routes =
    [
        {
            path: "",
            component: AppHomeComponent
        }
    ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
