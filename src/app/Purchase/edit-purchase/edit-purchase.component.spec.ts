import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseComponent } from './edit-purchase.component';

describe('EditPurchaseComponent', () => {
  let component: EditPurchaseComponent;
  let fixture: ComponentFixture<EditPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
