import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiesanatomicoComponent } from './piesanatomico.component';

describe('PiesanatomicoComponent', () => {
  let component: PiesanatomicoComponent;
  let fixture: ComponentFixture<PiesanatomicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiesanatomicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PiesanatomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
