import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalPageComponent } from './festival-page.component';

describe('FestivalPageComponent', () => {
  let component: FestivalPageComponent;
  let fixture: ComponentFixture<FestivalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FestivalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
