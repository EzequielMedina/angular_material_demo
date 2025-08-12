import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTextarea } from './material-textarea';

describe('MaterialTextarea', () => {
  let component: MaterialTextarea;
  let fixture: ComponentFixture<MaterialTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
