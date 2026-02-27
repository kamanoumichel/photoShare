import { Injectable } from '@angular/core';
import { PhotoCard } from '../models/photo-card';

@Injectable({
  providedIn: 'root',
})
export class PhotoCardService {
  private photoCards: PhotoCard[] = [
       new PhotoCard(
        1,
      "Chatons Joueurs",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
      "https://blooming-pets.com/wp-content/uploads/2026/01/Chaton-Toyger.png",
      new Date,
      50,
      "LIKE 👍"
    ),
    new PhotoCard(
      2,
      "Paysages d'Automne",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
      "https://www.amplitudes.com/blog/wp-content/uploads/2016/10/shutterstock_321110801_-Colorful-autumn-landscape.-Parc-national-Mont-Tremblant.-Quebec-recoup%C3%A9e.jpg",
      new Date,
      100,
      "LIKE 👍"
    ),
    new PhotoCard(
      3,
      "Couchers de Soleil",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
      "https://www.esterel-cotedazur.com/wp-content/uploads/2024/03/coucher-de-soleil-esterel-1-1600x740.jpg",
      new Date,
      150,
      "LIKE 👍"
    ).withLocation("Côte d'Azur") ,
    new PhotoCard(
      4,
      "Plats succulents",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor.",
      "https://tplmoms.com/wp-content/uploads/2021/06/luisa-brimble-2RrBE90w0T8-unsplash.jpg",
      new Date,
      255,
      "LIKE 👍"
    ),
    ];

    getPhotoCards(): PhotoCard[] {
      return this.photoCards;
    }
    getPhotoCardById(id: number): PhotoCard {
      const photo =this.photoCards.find(photoCard => photoCard.id === id);
      if (!photo) {
        throw new Error(`PhotoCard with id ${id} not found`);
      }
      return photo;
    } 


}

