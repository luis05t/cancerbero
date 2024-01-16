import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoanatomicoComponent } from './cuerpoanatomico.component';

describe('CuerpoanatomicoComponent', () => {
  let component: CuerpoanatomicoComponent;
  let fixture: ComponentFixture<CuerpoanatomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuerpoanatomicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuerpoanatomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
