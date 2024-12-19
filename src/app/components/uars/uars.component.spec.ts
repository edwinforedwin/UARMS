import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UarsComponent } from './uars.component';

describe('UarsComponent', () => {
  let component: UarsComponent;
  let fixture: ComponentFixture<UarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
