import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { headerMenuLinks } from './types/header-menu-link';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly headerMenuLinks = headerMenuLinks

  constructor(private router: Router) {

  }

  public mainMenuNavigation(route: string): void {
    this.router.navigate([route]);
  }
}
