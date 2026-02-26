import { Component, signal } from '@angular/core';
import { PhotoList } from './photo-list/photo-list';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 
}
