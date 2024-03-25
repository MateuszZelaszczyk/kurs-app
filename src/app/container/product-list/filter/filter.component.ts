import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfstock: number = 0;

 @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  
  selectedFilterRadioButton: string = 'all';
  OnselectedChanage(){
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}
