import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    NG_EVENT_PLUGINS,
    provideHttpClient(),
    provideTanStackQuery(new QueryClient()),
  ],
};
