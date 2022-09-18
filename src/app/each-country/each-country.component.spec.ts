import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCountryComponent } from './each-country.component';

describe('EachCountryComponent', () => {
  let component: EachCountryComponent;
  let fixture: ComponentFixture<EachCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
