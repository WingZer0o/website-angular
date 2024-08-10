import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Router } from '@angular/router';
import { headerMenuLinks } from './types/header-menu-link';
import { Typewritter } from '../../shared/typewritter';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public readonly headerMenuLinks = headerMenuLinks;
  
  @ViewChild('nameTypeWritter') 
  nameTypeWritter!: ElementRef<HTMLElement>;

  constructor(private router: Router) {

  }

  ngAfterViewInit(): void {
    const nameTypeWritter = new Typewritter(this.nameTypeWritter.nativeElement, {typingSpeed: 100, deletingSpeed: 150});
    nameTypeWritter.typeString("Mike Mulchrone").deleteString().start().then(() => {
      
    });
  }

  ngOnInit(): void {
  }

  public mainMenuNavigation(route: string): void {
    this.router.navigate([route]);
  }
}
