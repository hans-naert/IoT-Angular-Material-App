import { Component } from '@angular/core';
import { HueService } from '../hue-service';

@Component({
  selector: 'app-base',
  standalone: false,
  templateUrl: './base.html',
  styleUrl: './base.scss',
})
export class Base {

    constructor(private hueService: HueService) { }

  public lights: any[] = [];

  public loadLights() {
    this.hueService.getLights().subscribe(lights => {
      let _lights = lights as any;
      this.lights.push(_lights["1"]);
      this.lights.push(_lights["2"]);
      this.lights.push(_lights["3"]);

      console.log(_lights);
    });
  }

}
