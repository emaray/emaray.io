import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingStatementComponent } from './teaching-statement.component';

describe('TeachingStatementComponent', () => {
  let component: TeachingStatementComponent;
  let fixture: ComponentFixture<TeachingStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
