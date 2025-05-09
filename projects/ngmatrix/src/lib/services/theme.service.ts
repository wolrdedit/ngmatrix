import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark' | 'custom';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentThemeSubject = new BehaviorSubject<Theme>('light');

  currentTheme$: Observable<Theme> = this.currentThemeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('mx-theme') as Theme;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: Theme): void {
    this.currentThemeSubject.next(theme);
    localStorage.setItem('mx-theme', theme);

    const body = document.body;

    // Remove previous theme classes
    this.renderer.removeClass(body, 'mx-theme-light');
    this.renderer.removeClass(body, 'mx-theme-dark');
    this.renderer.removeClass(body, 'mx-theme-custom');

    // Add new theme class
    this.renderer.addClass(body, `mx-theme-${theme}`);

    // Set CSS variables based on theme
    if (theme === 'light') {
      this.setLightThemeVariables();
    } else if (theme === 'dark') {
      this.setDarkThemeVariables();
    }
  }

  getCurrentTheme(): Theme {
    return this.currentThemeSubject.getValue();
  }

  private setLightThemeVariables(): void {
    document.documentElement.style.setProperty(
      '--mx-background-color',
      '#ffffff'
    );
    document.documentElement.style.setProperty('--mx-text-color', '#1a202c');
    document.documentElement.style.setProperty('--mx-border-color', '#e2e8f0');
    document.documentElement.style.setProperty('--mx-primary-color', '#4299e1');
    document.documentElement.style.setProperty(
      '--mx-secondary-color',
      '#a0aec0'
    );
    document.documentElement.style.setProperty('--mx-success-color', '#48bb78');
    document.documentElement.style.setProperty('--mx-danger-color', '#f56565');
    document.documentElement.style.setProperty('--mx-warning-color', '#ecc94b');
    document.documentElement.style.setProperty('--mx-info-color', '#4299e1');
  }

  private setDarkThemeVariables(): void {
    document.documentElement.style.setProperty(
      '--mx-background-color',
      '#1a202c'
    );
    document.documentElement.style.setProperty('--mx-text-color', '#f7fafc');
    document.documentElement.style.setProperty('--mx-border-color', '#2d3748');
    document.documentElement.style.setProperty('--mx-primary-color', '#4299e1');
    document.documentElement.style.setProperty(
      '--mx-secondary-color',
      '#718096'
    );
    document.documentElement.style.setProperty('--mx-success-color', '#48bb78');
    document.documentElement.style.setProperty('--mx-danger-color', '#f56565');
    document.documentElement.style.setProperty('--mx-warning-color', '#ecc94b');
    document.documentElement.style.setProperty('--mx-info-color', '#4299e1');
  }

  // Custom theming
  setCustomThemeVariables(variables: Record<string, string>): void {
    Object.keys(variables).forEach((key) => {
      document.documentElement.style.setProperty(`--mx-${key}`, variables[key]);
    });
    this.setTheme('custom');
  }
}
