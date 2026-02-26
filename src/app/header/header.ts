import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
