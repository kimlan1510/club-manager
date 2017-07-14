import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: "allplayers",
    component: AllPlayersComponent
  },
  {
    path: "allplayers/:id",
    component: PlayerDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
