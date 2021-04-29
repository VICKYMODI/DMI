import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyTyreComponent } from './find-my-tyre.component';

describe('FindMyTyreComponent', () => {
  let component: FindMyTyreComponent;
  let fixture: ComponentFixture<FindMyTyreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMyTyreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMyTyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
