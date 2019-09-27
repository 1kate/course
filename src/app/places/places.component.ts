import { Component, OnInit, ViewChild,TemplateRef, ViewContainerRef, ContentChild, Input, Output, EventEmitter} from '@angular/core';

import { places, IPlace } from '../mock';
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})

export class PlacesComponent implements OnInit {
 
  public places: IPlace[] = places;
  public place = places[0];



  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container: ViewContainerRef;

  @ContentChild('content', {static: true})
  public templateContent: TemplateRef<any>;

  @Output() outputPlaces = new EventEmitter<IPlace>();
  constructor() { }
  public type(event) {
    // console.log(place);
    this.place=event;
    this.outputPlaces.emit(event); 
  }

  ngOnInit(): void {
    this.container.createEmbeddedView(this.templateContent);
    this.outputPlaces.emit(this.place); 
  }

}
