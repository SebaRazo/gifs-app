import { Component, input } from '@angular/core';
import { GifItemComponent } from './gif-item/gif-item.component.js';

@Component({
  selector: 'gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();
}
