import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-card';
import { DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-card',
  standalone: true,
  imports: [ 
     UpperCasePipe, 
  ],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss',
})
export class PhotoCardComponent implements OnInit{

  isliked !: boolean;
  @Input() photoCard !: PhotoCard;
  //myphotocard !: PhotoCard;
  constructor(private router:Router) {}
  ngOnInit(): void{}

  onDetails(): void {
    this.router.navigateByUrl(`photos/${this.photoCard.id}`);
  } 
}



