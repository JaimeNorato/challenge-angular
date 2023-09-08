import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressComponent } from './ip-address.component';

describe('IpAddressComponent', () => {
  let component: IpAddressComponent;
  let fixture: ComponentFixture<IpAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpAddressComponent]
    });
    fixture = TestBed.createComponent(IpAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
