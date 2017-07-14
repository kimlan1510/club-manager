import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()

export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  getPlayerById(playerId: string){
    return this.database.object('/players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer) {
    const playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name,
    role: localUpdatedPlayer.role,
    origin: localUpdatedPlayer.origin,
    winrate: localUpdatedPlayer.winrate
    });
  }

  deletePlayer(localPlayerToDelete) {
    const playerEntryInFirebase = this.getPlayerById(localPlayerToDelete.$key);
    playerEntryInFirebase.remove();
  }

}
