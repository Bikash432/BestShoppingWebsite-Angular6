import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpostComponent } from './getallpost.component';

describe('GetallpostComponent', () => {
  let component: GetallpostComponent;
  let fixture: ComponentFixture<GetallpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
