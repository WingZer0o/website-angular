import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { TECH_USED_LINKS } from './home.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public readonly techUsedLinks = TECH_USED_LINKS;

  ngOnInit(): void {
    
  }
}
