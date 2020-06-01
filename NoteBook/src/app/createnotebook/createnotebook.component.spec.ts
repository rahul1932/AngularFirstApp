import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotebookComponent } from './createnotebook.component';

describe('CreatenotebookComponent', () => {
  let component: CreatenotebookComponent;
  let fixture: ComponentFixture<CreatenotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
