import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorchComponent } from './torch.component';

describe('TorchComponent', () => {
  let component: TorchComponent;
  let fixture: ComponentFixture<TorchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TorchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
