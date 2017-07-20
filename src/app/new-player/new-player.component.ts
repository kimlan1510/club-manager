import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService} from '../player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService]
})
export class NewPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, role: string, origin: string, winrate: number, image: string){
    var newPlayer: Player = new Player(name, role, origin, winrate, image);
    this.playerService.addPlayer(newPlayer);
  }
}
