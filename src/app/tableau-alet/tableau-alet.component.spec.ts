import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauAletComponent } from './tableau-alet.component';

describe('TableauAletComponent', () => {
  let component: TableauAletComponent;
  let fixture: ComponentFixture<TableauAletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauAletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauAletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
