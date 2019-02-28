import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittDetailComponent } from './twitt-detail.component';

describe('TwittDetailComponent', () => {
  let component: TwittDetailComponent;
  let fixture: ComponentFixture<TwittDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
