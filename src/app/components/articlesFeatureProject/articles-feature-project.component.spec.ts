import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFeatureProjectComponent } from './articles-feature-project.component';

describe('ArticlesFeatureProjectComponent', () => {
  let component: ArticlesFeatureProjectComponent;
  let fixture: ComponentFixture<ArticlesFeatureProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFeatureProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFeatureProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
