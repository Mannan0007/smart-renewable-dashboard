import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGrid } from './smart-grid';

describe('SmartGrid', () => {
  let component: SmartGrid;
  let fixture: ComponentFixture<SmartGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
