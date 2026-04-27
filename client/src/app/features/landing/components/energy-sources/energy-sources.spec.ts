import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySources } from './energy-sources';

describe('EnergySources', () => {
  let component: EnergySources;
  let fixture: ComponentFixture<EnergySources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergySources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergySources);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
