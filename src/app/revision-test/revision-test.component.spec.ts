import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionTestComponent } from './revision-test.component';

describe('RevisionTestComponent', () => {
  let component: RevisionTestComponent;
  let fixture: ComponentFixture<RevisionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
