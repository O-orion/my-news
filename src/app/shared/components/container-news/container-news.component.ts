import { Component } from '@angular/core';
import { CardNewNewsComponent } from '../card-new-news/card-new-news.component';

@Component({
  selector: 'app-container-news',
  standalone: true,
  imports: [
    CardNewNewsComponent
  ],
  templateUrl: './container-news.component.html',
  styleUrl: './container-news.component.scss'
})
export class ContainerNewsComponent {

}
