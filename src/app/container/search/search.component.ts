import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string ='';
  updateSearchText(event: any){
    this.searchText=event.target.value
  }
}
