import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ManagerComponent } from './manager/manager.component';
import { NewPlayerComponent } from './new-player/new-player.component';

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
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'new-player',
    component: NewPlayerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
