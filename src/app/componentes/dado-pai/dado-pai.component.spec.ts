import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadoPaiComponent } from './dado-pai.component';

describe('DadoPaiComponent', () => {
  let component: DadoPaiComponent;
  let fixture: ComponentFixture<DadoPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadoPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadoPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
