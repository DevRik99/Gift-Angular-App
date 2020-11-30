import { GIFResponse } from './../../Interfaces/GifResponse.interface';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-gif-grit-item',
  templateUrl: './gif-grit-item.component.html',
  styleUrls: ['./gif-grit-item.component.scss'],
})
export class GifGritItemComponent implements OnInit {
  @Input() categoria: string;
  gifs: any;
  isLoading = true;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=ZsKy0kYfYxbDYmydyMg9dp33R2iO69wQ&q=${this.categoria}&limit=9&offset=0&rating=g`
      )
      .subscribe((Response: GIFResponse) => {
        const data = Response.data;
        this.isLoading = false;
        const gifs = data.map((gif) => ({
          id: gif.id,
          title: gif.title,
          url: gif.images.downsized_medium.url,
        }));
        this.gifs = gifs;
      });
  }
}
