import { CategoriasService } from 'src/app/Services/categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-gif',
  templateUrl: './form-gif.component.html',
  styleUrls: ['./form-gif.component.scss'],
})
export class FormGifComponent implements OnInit {
  form: FormGroup;
  constructor(private categoriasService: CategoriasService) {
    this.buildForm();
  }

  ngOnInit(): void {}
  private buildForm() {
    this.form = new FormGroup({
      category: new FormControl('', [Validators.required]),
    });
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.value.category) {
      this.categoriasService.handleSubmit(this.form.value.category);
    }
    this.form.reset(true);
  }
}
