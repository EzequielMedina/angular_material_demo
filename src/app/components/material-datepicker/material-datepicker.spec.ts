import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDatepicker } from './material-datepicker';

describe('MaterialDatepicker', () => {
  let component: MaterialDatepicker;
  let fixture: ComponentFixture<MaterialDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
