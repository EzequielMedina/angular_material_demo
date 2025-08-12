import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSelect } from './material-select';

describe('MaterialSelect', () => {
  let component: MaterialSelect;
  let fixture: ComponentFixture<MaterialSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
