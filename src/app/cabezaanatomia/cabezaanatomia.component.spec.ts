import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaanatomiaComponent } from './cabezaanatomia.component';

describe('CabezaanatomiaComponent', () => {
  let component: CabezaanatomiaComponent;
  let fixture: ComponentFixture<CabezaanatomiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabezaanatomiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabezaanatomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
