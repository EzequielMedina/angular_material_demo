import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCheckbox } from './material-checkbox';

describe('MaterialCheckbox', () => {
  let component: MaterialCheckbox;
  let fixture: ComponentFixture<MaterialCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCheckbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCheckbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
