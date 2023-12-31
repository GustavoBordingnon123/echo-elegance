import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.css']
})
export class FilterCardComponent {
  @Input() text: string = '';
  @Input() urlImage: string = '../../../assets/images/boots.png';
}
