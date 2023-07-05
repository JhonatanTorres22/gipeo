
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToogle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('fadeInOut', [
     transition (':enter', [
        style({opacity: 0 }),
        animate('350ms',
        style({opacity: 1})
        )
      ]),
      transition (':leave', [
        style({opacity: 1 }),
        animate('350ms',
        style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(2turn)', offset: '1'})
        ]))
      ])
    ])
    
  ]
 
})
export class SidebarComponent implements OnInit{

  @Output() onToggleSidenav: EventEmitter<SideNavToogle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;

    @HostListener('window:resize', ['$event'])
    onResize(event:any){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 768){
        this.collapsed=false
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
      }
    }
  
    tooglecollapsed(): void {
      this.collapsed = !this.collapsed;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  
    closeSidenav(): void {
      this.collapsed = false;
      this.onToggleSidenav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
    
  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any> } = { defaultOptions: [], accessLink: [] }



    constructor(private router:Router) {}

    ngOnInit(): void {

      this.screenWidth=window.innerWidth

      this.mainMenu.defaultOptions = [
        {
          "idContenedor": 1,
          "tituloMenu": "Dashborad",
          "urlMenu": "dashboard",
          "icono": "fa fa-home",
          "subMenus": [
            {
                "idSubMenu": 1,
                "idMenu": 2,
                "tituloSubMenu": "Por Correo",
                "urlSubmenu": "/PorCorreo/",
                "icono": "porcorreo.jpg"
            }
        ],
      },
      {
          "idContenedor": 2,
          "tituloMenu": "Datos",
          "urlMenu": "datos",
          "icono": "fa fa-book"
      },
      {
        "idMenu": 4,
        "idContenedor": 3,
        "tituloMenu": "Salir",
        "urlMenu": "/auth/login",
        "icono": "fa fa-sign-out"
    }
      ]
  

  
      
    }

}
