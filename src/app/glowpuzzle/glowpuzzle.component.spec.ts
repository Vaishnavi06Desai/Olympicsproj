import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowpuzzleComponent } from './glowpuzzle.component';

describe('GlowpuzzleComponent', () => {
  let component: GlowpuzzleComponent;
  let fixture: ComponentFixture<GlowpuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowpuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowpuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
