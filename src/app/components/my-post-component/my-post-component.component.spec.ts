import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostComponentComponent } from './my-post-component.component';

describe('MyPostComponentComponent', () => {
  let component: MyPostComponentComponent;
  let fixture: ComponentFixture<MyPostComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
