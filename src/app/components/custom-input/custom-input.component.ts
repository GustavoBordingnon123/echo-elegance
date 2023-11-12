// custom-input.component.ts
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: 'custom-input.component.html',
  styleUrls: ['custom-input.component.css'],
  encapsulation: ViewEncapsulation.None // Desativa o encapsulamento de estilos
})


export class CustomInputComponent {
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() type: string = "text";
  @Input() value: string = "";

}
