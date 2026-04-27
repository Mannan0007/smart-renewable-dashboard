import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonSection } from './carbon-section';

describe('CarbonSection', () => {
  let component: CarbonSection;
  let fixture: ComponentFixture<CarbonSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
