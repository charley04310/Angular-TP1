import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurDetailsComponent } from './editeur-details.component';

describe('EditeurDetailsComponent', () => {
  let component: EditeurDetailsComponent;
  let fixture: ComponentFixture<EditeurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeurDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
