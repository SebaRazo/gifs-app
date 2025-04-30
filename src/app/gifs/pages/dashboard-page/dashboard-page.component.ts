import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu/side-menu-header/side-menu-header.component.js';
import { SideMenuOptionsComponent } from '../../components/side-menu/side-menu-options/side-menu-options.component.js';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component.js';

@Component({
  selector: 'app-dashboard-page',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {}
