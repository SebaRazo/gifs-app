import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-item.component.html',
})
export class GifItemComponent {
  imageUrl = input.required<string>();
}
