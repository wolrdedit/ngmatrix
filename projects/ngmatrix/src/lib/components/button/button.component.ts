import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mx-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="mx-button"
      [class.mx-button-primary]="variant === 'primary'"
      [class.mx-button-secondary]="variant === 'secondary'"
      [class.mx-button-danger]="variant === 'danger'"
      [class.mx-button-success]="variant === 'success'"
      [class.mx-button-warning]="variant === 'warning'"
      [class.mx-button-info]="variant === 'info'"
      [class.mx-button-sm]="size === 'small'"
      [class.mx-button-md]="size === 'medium'"
      [class.mx-button-lg]="size === 'large'"
      [class.mx-button-rounded]="rounded"
      [class.mx-button-outline]="outline"
      [class.mx-button-block]="block"
      [disabled]="disabled"
      [type]="type"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [
    `
      .mx-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        border: 1px solid transparent;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s, border-color 0.2s,
          box-shadow 0.2s;
      }

      .mx-button:focus {
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
      }

      .mx-button:disabled {
        opacity: 0.65;
        cursor: not-allowed;
      }

      .mx-button-primary {
        background-color: #007bff;
        color: #fff;
        border-color: #007bff;
      }

      .mx-button-primary:hover:not(:disabled) {
        background-color: #0069d9;
        border-color: #0062cc;
      }

      .mx-button-secondary {
        background-color: #6c757d;
        color: #fff;
        border-color: #6c757d;
      }

      .mx-button-secondary:hover:not(:disabled) {
        background-color: #5a6268;
        border-color: #545b62;
      }

      .mx-button-success {
        background-color: #28a745;
        color: #fff;
        border-color: #28a745;
      }

      .mx-button-success:hover:not(:disabled) {
        background-color: #218838;
        border-color: #1e7e34;
      }

      .mx-button-danger {
        background-color: #dc3545;
        color: #fff;
        border-color: #dc3545;
      }

      .mx-button-danger:hover:not(:disabled) {
        background-color: #c82333;
        border-color: #bd2130;
      }

      .mx-button-warning {
        background-color: #ffc107;
        color: #212529;
        border-color: #ffc107;
      }

      .mx-button-warning:hover:not(:disabled) {
        background-color: #e0a800;
        border-color: #d39e00;
      }

      .mx-button-info {
        background-color: #17a2b8;
        color: #fff;
        border-color: #17a2b8;
      }

      .mx-button-info:hover:not(:disabled) {
        background-color: #138496;
        border-color: #117a8b;
      }

      .mx-button-sm {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }

      .mx-button-md {
        padding: 0.5rem 1rem;
        font-size: 1rem;
      }

      .mx-button-lg {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
      }

      .mx-button-rounded {
        border-radius: 50px;
      }

      .mx-button-block {
        display: block;
        width: 100%;
      }

      .mx-button-outline.mx-button-primary {
        background-color: transparent;
        color: #007bff;
      }

      .mx-button-outline.mx-button-primary:hover:not(:disabled) {
        background-color: #007bff;
        color: #fff;
      }

      .mx-button-outline.mx-button-secondary {
        background-color: transparent;
        color: #6c757d;
      }

      .mx-button-outline.mx-button-secondary:hover:not(:disabled) {
        background-color: #6c757d;
        color: #fff;
      }

      .mx-button-outline.mx-button-success {
        background-color: transparent;
        color: #28a745;
      }

      .mx-button-outline.mx-button-success:hover:not(:disabled) {
        background-color: #28a745;
        color: #fff;
      }

      .mx-button-outline.mx-button-danger {
        background-color: transparent;
        color: #dc3545;
      }

      .mx-button-outline.mx-button-danger:hover:not(:disabled) {
        background-color: #dc3545;
        color: #fff;
      }

      .mx-button-outline.mx-button-warning {
        background-color: transparent;
        color: #ffc107;
      }

      .mx-button-outline.mx-button-warning:hover:not(:disabled) {
        background-color: #ffc107;
        color: #212529;
      }

      .mx-button-outline.mx-button-info {
        background-color: transparent;
        color: #17a2b8;
      }

      .mx-button-outline.mx-button-info:hover:not(:disabled) {
        background-color: #17a2b8;
        color: #fff;
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() rounded = false;
  @Input() outline = false;
  @Input() block = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
}
