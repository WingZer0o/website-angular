import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { HEADER_MENU_LINKS } from './types/header-menu-link';
import { Typewritter } from '../../shared/typewritter';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public readonly headerMenuLinks = HEADER_MENU_LINKS;
  
  @ViewChild('nameTypeWritter') 
  nameTypeWritter!: ElementRef<HTMLElement>;

  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
      const typeWritter = new Typewritter(this.nameTypeWritter.nativeElement, {typingSpeed: 50, deletingSpeed: 150});
      typeWritter.typeString("Mike Mulchrone").deleteString().typeString("Mike M").deleteString().typeString("Mike Mulchrone").deleteString().start();
  }

  ngOnInit(): void {
  }

  public mainMenuNavigation(route: string): void {
    this.router.navigate([route]);
  }
}
