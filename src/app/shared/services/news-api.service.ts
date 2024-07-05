import { Injectable } from '@angular/core';
import { environment } from '../../../enviroemnts/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    const url = `${this.apiUrl}everything?q=bitcoin&apiKey=${this.apiKey}`;
    return this.http.get<any>(url)
  }

  setNewsStorage(news: any[]) {
    localStorage.setItem('news',  JSON.stringify(news))
  }

  getNewsStorage() {
    const newsString = localStorage.getItem('news')

    if(newsString) {
      const news: any = JSON.parse(newsString)
      return news
    }

  }
}
