import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  categorias: Array<string> = ['X-Men', 'Avengers', 'DC'];
  constructor() {}
  handleSubmit = (input) => {
    if (this.categorias.includes(input)) {
      return this.categorias;
    }
    if (input.trim().length > 0) {
      return [input, ...this.categorias];
    }
    return this.categorias;
  };
}
