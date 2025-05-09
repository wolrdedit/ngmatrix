import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmatrixComponent } from './ngmatrix.component';

describe('NgmatrixComponent', () => {
  let component: NgmatrixComponent;
  let fixture: ComponentFixture<NgmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
