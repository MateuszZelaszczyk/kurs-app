import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
listofString: string[] = ["Mark", "Steve", "Joe", "John", "Michael"]
}
