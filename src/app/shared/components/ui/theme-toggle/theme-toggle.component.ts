import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent implements OnInit {
  isDark = false;

  _themeService = inject(ThemeService);
  constructor() {}
  ngOnInit(): void {
    this.isDark = this._themeService.isDarkMode();
  }

  toggleTheme() {
    this._themeService.toggleTheme();
    this.isDark = this._themeService.isDarkMode();
  }
}
