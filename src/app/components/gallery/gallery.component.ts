import { Component } from '@angular/core';
import { GALLERY } from '../../shared/data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  Gallery = GALLERY;
}
