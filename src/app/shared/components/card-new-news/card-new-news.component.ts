import { Component } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-card-new-news',
  standalone: true,
  imports: [],
  templateUrl: './card-new-news.component.html',
  styleUrl: './card-new-news.component.scss'
})
export class CardNewNewsComponent {
  data: any = [ ]
  constructor( private service: NewsApiService) {}

  ngOnInit() {
    this.service.getNews().subscribe({
      next: (dados) => {
        console.log(dados.articles)
        this.data = dados;
      }
    })
  }

}
