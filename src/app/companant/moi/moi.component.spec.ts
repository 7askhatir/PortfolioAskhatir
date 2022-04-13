import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiComponent } from './moi.component';

describe('MoiComponent', () => {
  let component: MoiComponent;
  let fixture: ComponentFixture<MoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
