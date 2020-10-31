import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectsArticlesComponent } from './featured-projects-articles.component';

describe('FeaturedProjectsArticlesComponent', () => {
  let component: FeaturedProjectsArticlesComponent;
  let fixture: ComponentFixture<FeaturedProjectsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProjectsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProjectsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
