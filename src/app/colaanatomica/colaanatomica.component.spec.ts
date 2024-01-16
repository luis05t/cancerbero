import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaanatomicaComponent } from './colaanatomica.component';

describe('ColaanatomicaComponent', () => {
  let component: ColaanatomicaComponent;
  let fixture: ComponentFixture<ColaanatomicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaanatomicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColaanatomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
