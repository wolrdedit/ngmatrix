# NG Matrix

A modern, lightweight UI component library for Angular 19+.

## Installation

```bash
npm install ngmatrix
```

## Usage

### Import Styles (in styles.scss)

```scss
@import "ngmatrix/styles";
```

### Standalone Component Usage

```typescript
import { Component } from "@angular/core";
import { ButtonComponent } from "ngmatrix";

@Component({
  selector: "app-my-component",
  standalone: true,
  imports: [ButtonComponent],
  template: ` <mx-button>Click Me</mx-button> `,
})
export class MyComponent {}
```

### NgModule Usage

```typescript
import { NgModule } from "@angular/core";
import { NgmatrixModule } from "ngmatrix";

@NgModule({
  imports: [NgmatrixModule],
})
export class MyModule {}
```

## Available Components

### Button

A customizable button component with various styles, sizes, and states.

```html
<mx-button variant="primary" size="medium" [disabled]="false" [rounded]="false" [outline]="false" [block]="false"> Button Text </mx-button>
```

#### Properties

- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `rounded`: boolean
- `outline`: boolean
- `block`: boolean
- `type`: 'button' | 'submit' | 'reset'

### Card

A flexible card component for displaying content in a box with a consistent style.

```html
<mx-card title="Card Title" subtitle="Card Subtitle" [border]="true" [shadow]="false">
  <p>Card content goes here...</p>
</mx-card>
```

#### Properties

- `title`: string
- `subtitle`: string
- `border`: boolean
- `shadow`: boolean
- `headerTemplate`: boolean - Set to true when using custom header
- `footerTemplate`: boolean - Set to true when using custom footer

#### Custom header and footer

```html
<mx-card [headerTemplate]="true" [footerTemplate]="true">
  <div mxCardHeader>Custom Header Content</div>

  <!-- Card body content -->
  <p>Card content here</p>

  <div mxCardFooter>Custom Footer Content</div>
</mx-card>
```

### Input

A form input component with validation, icons, and various states.

```html
<mx-input label="Email" placeholder="Enter your email" type="email" [required]="true" [fullWidth]="true" [error]="emailError" hint="We'll never share your email" (valueChange)="onEmailChange($event)"> </mx-input>
```

#### Properties

- `id`: string
- `label`: string
- `placeholder`: string
- `type`: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'
- `size`: 'small' | 'medium' | 'large'
- `required`: boolean
- `disabled`: boolean
- `readonly`: boolean
- `autocomplete`: string
- `fullWidth`: boolean
- `error`: string
- `hint`: string
- `icon`: boolean - Set to true when using custom icon

#### With icon

```html
<mx-input [icon]="true">
  <span mxInputIcon>
    <!-- Icon content here -->
    <i class="fa fa-search"></i>
  </span>
</mx-input>
```

## Theming

NG Matrix supports light and dark themes out of the box, plus custom theming.

### Using the Theme Service

```typescript
import { Component } from "@angular/core";
import { ThemeService } from "ngmatrix";

@Component({
  selector: "app-theme-switcher",
  template: ` <button (click)="toggleTheme()">Toggle Theme</button> `,
})
export class ThemeSwitcherComponent {
  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    const currentTheme = this.themeService.getCurrentTheme();
    this.themeService.setTheme(currentTheme === "light" ? "dark" : "light");
  }

  // For custom theming
  setCustomTheme() {
    this.themeService.setCustomThemeVariables({
      "primary-color": "#ff0000",
      "secondary-color": "#00ff00",
      // Add any CSS variables you want to override
    });
  }
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
