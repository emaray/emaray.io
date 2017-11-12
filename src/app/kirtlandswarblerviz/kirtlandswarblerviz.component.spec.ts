import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KirtlandswarblervizComponent } from './kirtlandswarblerviz.component';

describe('KirtlandswarblervizComponent', () => {
  let component: KirtlandswarblervizComponent;
  let fixture: ComponentFixture<KirtlandswarblervizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirtlandswarblervizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KirtlandswarblervizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
