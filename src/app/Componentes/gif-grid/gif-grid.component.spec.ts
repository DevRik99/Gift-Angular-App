import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifGridComponent } from './gif-grid.component';

describe('GifGridComponent', () => {
  let component: GifGridComponent;
  let fixture: ComponentFixture<GifGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
