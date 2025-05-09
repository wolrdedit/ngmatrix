import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, CardComponent, InputComponent } from 'ngmatrix';
import { ThemeService } from 'ngmatrix';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonComponent,
    CardComponent,
    InputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
  currentTheme: 'light' | 'dark' = 'light';

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme() as 'light' | 'dark';
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.currentTheme);
  }
}
