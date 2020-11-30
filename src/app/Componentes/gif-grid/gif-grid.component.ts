import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/Services/categorias.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.scss'],
})
export class GifGridComponent implements OnInit {
  constructor(public categoriasService: CategoriasService) {}
  ngOnInit(): void {}
}
