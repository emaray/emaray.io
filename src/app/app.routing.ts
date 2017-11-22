import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CVComponent } from './cv/cv.component';
import { InterestsComponent } from './interests/interests.component';
import { PortfolioComponent} from './portfolio/portfolio.component'
import { KirtlandswarblervizComponent } from './kirtlandswarblerviz/kirtlandswarblerviz.component';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent},
    {path: 'cv', component: CVComponent},
    {path: 'interests', component: InterestsComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'kirtlandswarblerviz', component: KirtlandswarblervizComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
