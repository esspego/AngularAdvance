import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-handler-progress-bar',
  templateUrl: './handler-progress-bar.component.html',
  styles: [
  ]
})
export class HandlerProgressBarComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() percentage: number = 50;
  @Input('name') legend: string = 'Leyenda';

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }
  checkValue(value): boolean{
    if (this.percentage >= 100 && value > 0 || this.percentage <= 0 && value < 0){
      return false;
    }
    return true;
  }
  onChange(newValue: number): any{
    const isOnRange = this.checkValue(newValue);
    this.txtProgress.nativeElement.value = this.percentage;
    if (newValue > 100){
      newValue = 100;
    }
    if (newValue < 0){
      newValue = 0;
    }
    this.txtProgress.nativeElement.focus();
    this.changeValue.emit(newValue);
  }
  changePercentage(value): number{
    const isOnRange = this.checkValue(value);
    if (!isOnRange){ return; }
    this.percentage = this.percentage + value;
    this.changeValue.emit(this.percentage);
  }
}
