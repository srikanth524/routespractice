import {Routes} from '@angular/router'
import { homeRoute } from './home/home.routing'
import { indexRoute } from './index/index.routing'
import { noPageRoutes } from './no-page/no-page.routing';

export const appRoutes:Routes=[...homeRoute, ...indexRoute, ...noPageRoutes];