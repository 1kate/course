import { Component, OnInit, ViewChild,TemplateRef, ViewContainerRef, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
 
  @Input()
  public place;

  @Input()
  public places;

  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container: ViewContainerRef;

  @ContentChild('content', {static: true})
  public templateContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    this.container.createEmbeddedView(this.templateContent); 
  }

}
