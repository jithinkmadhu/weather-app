import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCountryComponent } from './home-country.component';

describe('HomeCountryComponent', () => {
  let component: HomeCountryComponent;
  let fixture: ComponentFixture<HomeCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
