import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingtaskComponent } from './scrollingtask.component';

describe('ScrollingtaskComponent', () => {
  let component: ScrollingtaskComponent;
  let fixture: ComponentFixture<ScrollingtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingtaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
