import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExisteComponent } from './no-existe.component';

describe('NoExisteComponent', () => {
  let component: NoExisteComponent;
  let fixture: ComponentFixture<NoExisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoExisteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
