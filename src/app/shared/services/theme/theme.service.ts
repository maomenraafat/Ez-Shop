import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';
  private darkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadTheme();
  }

  loadTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme) {
        this.darkMode = savedTheme === 'dark';
      } else {
        this.darkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.darkMode = !this.darkMode;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, this.darkMode ? 'dark' : 'light');
    }
    this.applyTheme();
  }

  isDarkMode() {
    return this.darkMode;
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }
}
