import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanserberoComponent } from './canserbero.component';

describe('CanserberoComponent', () => {
  let component: CanserberoComponent;
  let fixture: ComponentFixture<CanserberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanserberoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanserberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
