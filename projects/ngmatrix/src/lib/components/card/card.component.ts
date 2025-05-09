import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mx-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="mx-card"
      [class.mx-card-border]="border"
      [class.mx-card-shadow]="shadow"
    >
      <div class="mx-card-header" *ngIf="headerTemplate || title">
        <ng-container *ngIf="headerTemplate; else defaultHeader">
          <ng-content select="[mxCardHeader]"></ng-content>
        </ng-container>
        <ng-template #defaultHeader>
          <h3 class="mx-card-title">{{ title }}</h3>
          <p class="mx-card-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
        </ng-template>
      </div>
      <div class="mx-card-body">
        <ng-content></ng-content>
      </div>
      <div class="mx-card-footer" *ngIf="footerTemplate">
        <ng-content select="[mxCardFooter]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .mx-card {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 0.375rem;
        overflow: hidden;
      }

      .mx-card-border {
        border: 1px solid #e2e8f0;
      }

      .mx-card-shadow {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }

      .mx-card-header {
        padding: 1rem 1.25rem;
        border-bottom: 1px solid #e2e8f0;
      }

      .mx-card-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #1a202c;
      }

      .mx-card-subtitle {
        margin: 0.5rem 0 0;
        font-size: 0.875rem;
        color: #718096;
      }

      .mx-card-body {
        padding: 1.25rem;
        flex: 1 1 auto;
      }

      .mx-card-footer {
        padding: 1rem 1.25rem;
        border-top: 1px solid #e2e8f0;
      }
    `,
  ],
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() border = true;
  @Input() shadow = false;

  @Input() headerTemplate = false;
  @Input() footerTemplate = false;
}
