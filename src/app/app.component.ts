import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer/footer.component';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ez-shop';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadTheme();
  }
}
