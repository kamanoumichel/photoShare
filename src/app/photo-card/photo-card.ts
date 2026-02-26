import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-card';
import { DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'ap-photo-card',
  standalone: true,
  imports: [NgStyle,
     NgClass, 
     UpperCasePipe, 
     DatePipe],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss',
})
export class PhotoCardComponent implements OnInit{
  /*title !: string;
  description !: string;
  imageUrl !: string;
  created_at !: Date;
  like !: number; 
  textLikeButton !: string;*/
  isliked !: boolean;
  @Input() photoCard !: PhotoCard;
  //myphotocard !: PhotoCard;

  ngOnInit(): void{}
    /*this.title = "Chatons Joueurs";
    this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.";
    this.imageUrl = "https://blooming-pets.com/wp-content/uploads/2026/01/Chaton-Toyger.png";
    this.created_at = new Date;
    this.like = 0;
    this.textLikeButton = "LIKE";
    this.isliked = false;
  
  }*/
  onAddLike(): void {
    if(this.isliked){
      this.photoCard.like--;
      this.isliked = false;
      this.photoCard.textLikeButton = "LIKE 👍";
    } else {
      this.photoCard.like++;
      this.isliked = true;
      this.photoCard.textLikeButton = "UNLIKE 👎";
    }
} 
}



