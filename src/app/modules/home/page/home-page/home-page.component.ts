import { Component, Input } from '@angular/core';

interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isSideNavCollapsed = false;
  screenWidth=0;

  onToggleSidenav(data: SideNavToogle):void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }

  @Input() collapsed = false;
  @Input() screenWidthbody = 0;

}
