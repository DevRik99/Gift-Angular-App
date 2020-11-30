import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGifComponent } from './form-gif.component';

describe('FormGifComponent', () => {
  let component: FormGifComponent;
  let fixture: ComponentFixture<FormGifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
