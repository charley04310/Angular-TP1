import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxFormComponent } from './jeux-form.component';

describe('JeuxFormComponent', () => {
  let component: JeuxFormComponent;
  let fixture: ComponentFixture<JeuxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
