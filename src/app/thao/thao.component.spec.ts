import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaoComponent } from './thao.component';

describe('ThaoComponent', () => {
  let component: ThaoComponent;
  let fixture: ComponentFixture<ThaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
