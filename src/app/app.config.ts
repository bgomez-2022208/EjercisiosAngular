import { ApplicationConfig } from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {routes} from "./app-routing.module";
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
