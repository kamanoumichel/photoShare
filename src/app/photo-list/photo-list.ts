import { Component, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-card';
import { PhotoCardComponent } from '../photo-card/photo-card';
import { PhotoCardService } from '../services/photo-card';

@Component({
  selector: 'app-photo-list',
  imports: [PhotoCardComponent],
  templateUrl: './photo-list.html',
  styleUrl: './photo-list.scss',
})
export class PhotoList implements OnInit {
 photoCards !: PhotoCard[];
 // protected readonly title = signal('photoShare');
  constructor(private photoCardService: PhotoCardService) {}
  ngOnInit(): void {
    this.photoCards = this.photoCardService.getPhotoCards();


  }
}
