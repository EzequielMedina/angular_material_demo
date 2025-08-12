import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialInput } from './material-input';

describe('MaterialInput', () => {
  let component: MaterialInput;
  let fixture: ComponentFixture<MaterialInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
