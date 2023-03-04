import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultFestivalDetailsComponent } from './consult-festival-details.component';

describe('ConsultFestivalDetailsComponent', () => {
  let component: ConsultFestivalDetailsComponent;
  let fixture: ComponentFixture<ConsultFestivalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultFestivalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultFestivalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
