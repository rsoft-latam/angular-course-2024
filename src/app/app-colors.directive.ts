import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngColors]',
  standalone: true
})
export class AppColorsDirective {

  @Input() ngColors!: string;
  @Input() defaultColor!: string;

  @Output() colorClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() colorDoubleCick: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = this.ngColors;
    this.colorClick.emit('CLick cuurent color is :' + this.ngColors);
  }

  @HostListener('dblclick') onDoubleClick() {
    this.element.nativeElement.style.backgroundColor = this.ngColors;
    this.colorDoubleCick.emit('DBL current color is :' + this.ngColors);
  }

  @HostListener('mouseleave') onBlur() {
    this.ngColors = this.defaultColor
  }

  constructor(private element: ElementRef) { 

  }

}
