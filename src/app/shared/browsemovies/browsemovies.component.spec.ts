import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsemoviesComponent } from './browsemovies.component';

describe('BrowsemoviesComponent', () => {
  let component: BrowsemoviesComponent;
  let fixture: ComponentFixture<BrowsemoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowsemoviesComponent]
    });
    fixture = TestBed.createComponent(BrowsemoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
