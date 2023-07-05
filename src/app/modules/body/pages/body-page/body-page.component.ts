import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.scss']
})
export class BodyPageComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
getBodyClass():string {
  let styleClass = '';
  if(this.collapsed && this.screenWidth > 768){
    styleClass= 'body-trimed';
  } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
    styleClass= 'body-md-screen'
  }
  return styleClass;
}

}
