import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'mx-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="mx-input-container" [class.mx-input-fullwidth]="fullWidth">
      <label *ngIf="label" [for]="id" class="mx-input-label">
        {{ label }}
        <span class="mx-input-required" *ngIf="required">*</span>
      </label>

      <div class="mx-input-wrapper">
        <input
          [id]="id"
          [type]="type"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled"
          [readonly]="readonly"
          [autocomplete]="autocomplete"
          [class.mx-input-sm]="size === 'small'"
          [class.mx-input-md]="size === 'medium'"
          [class.mx-input-lg]="size === 'large'"
          [class.mx-input-error]="!!error"
          class="mx-input"
          [(ngModel)]="value"
          (input)="onInput($event)"
          (blur)="onTouched()"
        />

        <div class="mx-input-icon" *ngIf="icon">
          <ng-content select="[mxInputIcon]"></ng-content>
        </div>
      </div>

      <div *ngIf="error" class="mx-input-error-message">{{ error }}</div>
      <div *ngIf="hint && !error" class="mx-input-hint">{{ hint }}</div>
    </div>
  `,
  styles: [
    `
      .mx-input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
      }

      .mx-input-fullwidth {
        width: 100%;
      }

      .mx-input-label {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #4a5568;
      }

      .mx-input-required {
        color: #e53e3e;
        margin-left: 0.25rem;
      }

      .mx-input-wrapper {
        position: relative;
        display: inline-flex;
        width: 100%;
      }

      .mx-input {
        width: 100%;
        padding: 0.5rem 0.75rem;
        color: #1a202c;
        background-color: #fff;
        border: 1px solid #cbd5e0;
        border-radius: 0.375rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }

      .mx-input:focus {
        outline: none;
        border-color: #4299e1;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
      }

      .mx-input:disabled {
        background-color: #edf2f7;
        cursor: not-allowed;
        opacity: 0.7;
      }

      .mx-input::placeholder {
        color: #a0aec0;
      }

      .mx-input-sm {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
      }

      .mx-input-md {
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
      }

      .mx-input-lg {
        padding: 0.75rem 1rem;
        font-size: 1.125rem;
      }

      .mx-input-error {
        border-color: #e53e3e;
      }

      .mx-input-error:focus {
        box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.15);
      }

      .mx-input-error-message {
        color: #e53e3e;
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }

      .mx-input-hint {
        color: #718096;
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }

      .mx-input-icon {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id = `mx-input-${Math.floor(Math.random() * 10000)}`;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search' = 'text';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() autocomplete = 'off';
  @Input() fullWidth = false;
  @Input() error = '';
  @Input() hint = '';
  @Input() icon = false;

  @Output() valueChange = new EventEmitter<string>();

  private _value = '';

  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.onChange(val);
    this.valueChange.emit(val);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  writeValue(value: string): void {
    this._value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
