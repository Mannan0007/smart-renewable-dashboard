import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEcogrid } from './about-ecogrid';

describe('AboutEcogrid', () => {
  let component: AboutEcogrid;
  let fixture: ComponentFixture<AboutEcogrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEcogrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEcogrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
