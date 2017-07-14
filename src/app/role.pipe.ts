import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'roles',
  pure: false
})

export class RolePipe implements PipeTransform {

  transform(input: Player[], role) {
    var output: Player[] = [];
    if(role === "Striker") {
      for(let i=0; i<input.length; i++){
        if(input[i].role === "Striker"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(role === "Defender") {
      for(let i=0; i<input.length; i++){
        if(input[i].role === "Defender"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(role === "Super Fan") {
      for(let i=0; i<input.length; i++){
        if(input[i].role === "Super Fan"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(role === "Goal Keeper") {
      for(let i=0; i<input.length; i++){
        if(input[i].role === "Goal Keeper"){
          output.push(input[i]);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }

}
