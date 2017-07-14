import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  editPlayerForm: boolean = false;
  editPlayerButton: boolean = true;

  @Input() selectedPlayer;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  beginUpdatePlayer(playerToUpdate){
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
   if(confirm("Are you sure you want to delete this player? You cannot undo this action.")){
     this.playerService.deletePlayer(playerToDelete);
   }
 }

  showEditPlayerForm() {
    this.editPlayerForm = true;
    this.editPlayerButton = false;
  }

  hideEditPlayerForm() {
    this.editPlayerForm = false;
    this.editPlayerButton = true;
  }

}
