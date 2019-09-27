import { Component } from '@angular/core';
import { places, IPlace } from './mock/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public place: IPlace[]; 
  title = 'course';

   
  public output(event):void {
   this.place = event;
   console.log(this.place);
}
 
}
