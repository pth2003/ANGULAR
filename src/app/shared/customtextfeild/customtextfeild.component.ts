import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiDay } from '@taiga-ui/cdk/date-time';
import {
  TuiInputDateModule,
  TuiSelectModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
@Component({
  selector: 'app-customtextfeild',
  standalone: true,
  imports: [
    CommonModule,
    TuiInputDateModule,
    FormsModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiTextfield,
  ],
  templateUrl: './customtextfeild.component.html',
  styleUrls: ['./customtextfeild.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomtextfeildComponent),
      multi: true,
    },
  ],
})
export class CustomtextfeildComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: 'text' | 'date' | 'select' = 'text';
  @Input() options: string[] | any = [];
  @Input() placeholder: string = '';
  @Input() disable: string = '';
  value: any = '';
  dateValue: TuiDay | null = null;

  onChange = (value: any) => {};
  onTouched = () => {};
  statusQuery: any;

  writeValue(value: any): void {
    if (this.type === 'date' && value) {
      this.dateValue = TuiDay.fromLocalNativeDate(new Date(value));
    } else if (this.type === 'select') {
      if (this.options && this.options.length > 0) {
        this.value = this.options[0].label;
      }
    } else {
      this.value = value || '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }
  // onDateChange(date: TuiDay | null): void {
  //   if (date) {
  //     this.dateValue = date;
  //     this.onChange(date.toLocalNativeDate().toISOString());
  //   }
  // }
}
