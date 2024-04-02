import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headerService.headerData.title;
  }
  get icon(): string {
    return this.headerService.headerData.icon;
  }
  get routeURL(): string {
    return this.headerService.headerData.routeUrl;
  }
}
