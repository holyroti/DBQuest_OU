import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parsons1NFComponent } from './parsons-1nf.component';

describe('ParsonsEasyComponent', () => {
  let component: Parsons1NFComponent;
  let fixture: ComponentFixture<Parsons1NFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Parsons1NFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parsons1NFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
