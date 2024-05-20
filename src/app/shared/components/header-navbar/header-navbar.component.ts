import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTE_LIST } from '../../utils/route-list';
import { NavbarLink } from './header-navbar.interfaces';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.scss',
})
export class HeaderNavbarComponent { 

  public navbarItems: NavbarLink[] = [
    {label: 'Home', link: ROUTE_LIST.HOME},
    {label: 'Shop', link: ROUTE_LIST.SHOP},
    {label: 'Contact', link: ROUTE_LIST.ABOUT_US},
  ];

}
