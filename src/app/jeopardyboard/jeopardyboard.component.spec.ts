import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JEOPARDYBOARDComponent } from './jeopardyboard.component';

describe('JEOPARDYBOARDComponent', () => {
  let component: JEOPARDYBOARDComponent;
  let fixture: ComponentFixture<JEOPARDYBOARDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JEOPARDYBOARDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JEOPARDYBOARDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
