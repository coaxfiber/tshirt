import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDialogsComponent } from './simple-dialogs.component';

describe('SimpleDialogsComponent', () => {
  let component: SimpleDialogsComponent;
  let fixture: ComponentFixture<SimpleDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
