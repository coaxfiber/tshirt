import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDialogsComponent } from './select-dialogs.component';

describe('SelectDialogsComponent', () => {
  let component: SelectDialogsComponent;
  let fixture: ComponentFixture<SelectDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
