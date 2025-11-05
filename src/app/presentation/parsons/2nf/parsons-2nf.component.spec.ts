import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parsons2NFComponent } from './parsons-2nf.component';

describe('ParsonsColumnsComponent', () => {
  let component: Parsons2NFComponent;
  let fixture: ComponentFixture<Parsons2NFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parsons2NFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parsons2NFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
