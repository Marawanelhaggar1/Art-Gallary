import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProductsComponent } from './one-products.component';

describe('OneProductsComponent', () => {
  let component: OneProductsComponent;
  let fixture: ComponentFixture<OneProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneProductsComponent]
    });
    fixture = TestBed.createComponent(OneProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
