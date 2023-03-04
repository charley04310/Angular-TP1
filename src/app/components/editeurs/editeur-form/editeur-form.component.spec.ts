import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurFormComponent } from './editeur-form.component';

describe('EditeurFormComponent', () => {
  let component: EditeurFormComponent;
  let fixture: ComponentFixture<EditeurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeurFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
