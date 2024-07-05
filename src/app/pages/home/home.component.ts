import { Component } from '@angular/core';
import { ContainerNewsComponent } from '../../shared/components/container-news/container-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerNewsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
