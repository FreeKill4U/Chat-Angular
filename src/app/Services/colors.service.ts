import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  public static colors = Array<string>();

  constructor()
  {
    ColorsService.colors.push('#ff0000');
    ColorsService.colors.push('#ff8800');
    ColorsService.colors.push('#ffff00');
    ColorsService.colors.push('#88ff00');
    ColorsService.colors.push('#00ff00');
    ColorsService.colors.push('#00ff88');
    ColorsService.colors.push('#00ffff');
    ColorsService.colors.push('#0088ff');
    ColorsService.colors.push('#0000ff');
    ColorsService.colors.push('#8800ff');
    ColorsService.colors.push('#ff0088');
    ColorsService.colors.push('#88ff88');

    ColorsService.colors.push('#dd0000');
    ColorsService.colors.push('#dd7700');
    ColorsService.colors.push('#dddd00');
    ColorsService.colors.push('#77dd00');
    ColorsService.colors.push('#00dd00');
    ColorsService.colors.push('#00dd77');
    ColorsService.colors.push('#00dddd');
    ColorsService.colors.push('#0077dd');
    ColorsService.colors.push('#0000dd');
    ColorsService.colors.push('#7700dd');
    ColorsService.colors.push('#dd0077');
    ColorsService.colors.push('#77dd77');

    ColorsService.colors.push('#bb0000');
    ColorsService.colors.push('#bb6600');
    ColorsService.colors.push('#bbbb00');
    ColorsService.colors.push('#66bb00');
    ColorsService.colors.push('#00bb00');
    ColorsService.colors.push('#00bb66');
    ColorsService.colors.push('#00bbbb');
    ColorsService.colors.push('#0066bb');
    ColorsService.colors.push('#0000bb');
    ColorsService.colors.push('#6600bb');
    ColorsService.colors.push('#bb0066');
    ColorsService.colors.push('#66bb66');

    ColorsService.colors.push('#990000');
    ColorsService.colors.push('#996600');
    ColorsService.colors.push('#999900');
    ColorsService.colors.push('#669900');
    ColorsService.colors.push('#009900');
    ColorsService.colors.push('#009966');
    ColorsService.colors.push('#009999');
    ColorsService.colors.push('#006699');
    ColorsService.colors.push('#000099');
    ColorsService.colors.push('#660099');
    ColorsService.colors.push('#990066');
    ColorsService.colors.push('#669966');

    ColorsService.colors.push('#770000');
    ColorsService.colors.push('#775500');
    ColorsService.colors.push('#777700');
    ColorsService.colors.push('#557700');
    ColorsService.colors.push('#007700');
    ColorsService.colors.push('#007755');
    ColorsService.colors.push('#007777');
    ColorsService.colors.push('#005577');
    ColorsService.colors.push('#000077');
    ColorsService.colors.push('#550077');
    ColorsService.colors.push('#770055');
    ColorsService.colors.push('#557755');

    ColorsService.colors.push('#550000');
    ColorsService.colors.push('#554400');
    ColorsService.colors.push('#555500');
    ColorsService.colors.push('#445500');
    ColorsService.colors.push('#005500');
    ColorsService.colors.push('#005544');
    ColorsService.colors.push('#005555');
    ColorsService.colors.push('#004455');
    ColorsService.colors.push('#000055');
    ColorsService.colors.push('#440055');
    ColorsService.colors.push('#550044');
    ColorsService.colors.push('#445544');

    ColorsService.colors.push('#330000');
    ColorsService.colors.push('#333300');
    ColorsService.colors.push('#333300');
    ColorsService.colors.push('#333300');
    ColorsService.colors.push('#003300');
    ColorsService.colors.push('#003333');
    ColorsService.colors.push('#003333');
    ColorsService.colors.push('#003333');
    ColorsService.colors.push('#000033');
    ColorsService.colors.push('#330033');
    ColorsService.colors.push('#330033');
    ColorsService.colors.push('#333333');
  }
}
