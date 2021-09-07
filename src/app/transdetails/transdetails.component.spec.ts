import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransdetailsComponent } from './transdetails.component';

describe('TransdetailsComponent', () => {
  let component: TransdetailsComponent;
  let fixture: ComponentFixture<TransdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
