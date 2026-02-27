import { Component, Input, OnInit } from '@angular/core';
import { PhotoCard } from '../models/photo-card';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { PhotoCardService } from '../services/photo-card';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  imports: [NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe, RouterLink],
  templateUrl: './photo-detail.html',
  styleUrl: './photo-detail.scss',
})
export class PhotoDetail implements OnInit {
    /*title !: string;
  description !: string;
  imageUrl !: string;
  created_at !: Date;
  like !: number; */
  textLikeButton !: string;
  isliked !: boolean;
  photoCard !: PhotoCard;
  //@Input() photoCard !: PhotoCard;
  //myphotocard !: PhotoCard;
  constructor(private photoCardService: PhotoCardService, private route:ActivatedRoute) {}
  ngOnInit(): void{
    const id = +this.route.snapshot.params['id'];
    this.photoCard = this.photoCardService.getPhotoCardById(id);
    this.textLikeButton = 'LIKE 👍';
    this.isliked = false;
  }
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
