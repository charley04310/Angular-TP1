import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurPageComponent } from './editeur-page.component';

describe('EditeurPageComponent', () => {
  let component: EditeurPageComponent;
  let fixture: ComponentFixture<EditeurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeurPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
