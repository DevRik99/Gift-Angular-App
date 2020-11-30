import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGritItemComponent } from './gif-grit-item.component';

describe('GifGritItemComponent', () => {
  let component: GifGritItemComponent;
  let fixture: ComponentFixture<GifGritItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifGritItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGritItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
