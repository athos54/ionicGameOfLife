import { Component, Input } from '@angular/core';

@Component({
  selector: 'celula',
  templateUrl: 'celula.html'
})
export class CelulaComponent {
  @Input('estado')estado
  constructor() {}
}
