import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaboresPage } from './sabores.page';

describe('SaboresPage', () => {
  let component: SaboresPage;
  let fixture: ComponentFixture<SaboresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaboresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaboresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
