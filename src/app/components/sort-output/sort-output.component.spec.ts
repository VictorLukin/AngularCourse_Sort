import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortOutputComponent } from './sort-output.component';

describe('SortOutputComponent', () => {
  let component: SortOutputComponent;
  let fixture: ComponentFixture<SortOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
