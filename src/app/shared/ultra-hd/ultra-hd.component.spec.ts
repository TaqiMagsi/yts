import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraHDComponent } from './ultra-hd.component';

describe('UltraHDComponent', () => {
  let component: UltraHDComponent;
  let fixture: ComponentFixture<UltraHDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltraHDComponent]
    });
    fixture = TestBed.createComponent(UltraHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
