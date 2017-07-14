import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css'],
  providers: [PlayerService]
})
export class AllPlayersComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer){
    this.router.navigate(['allplayers', clickedPlayer.$key]);
  }

}
