import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviebannerComponent } from './moviebanner.component';

describe('MoviebannerComponent', () => {
  let component: MoviebannerComponent;
  let fixture: ComponentFixture<MoviebannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviebannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
