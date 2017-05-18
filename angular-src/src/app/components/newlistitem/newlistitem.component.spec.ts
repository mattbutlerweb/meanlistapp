/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewlistitemComponent } from './newlistitem.component';

describe('NewlistitemComponent', () => {
  let component: NewlistitemComponent;
  let fixture: ComponentFixture<NewlistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
