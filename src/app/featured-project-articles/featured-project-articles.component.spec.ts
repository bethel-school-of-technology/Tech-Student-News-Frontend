import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProjectArticlesComponent } from './featured-project-articles.component';

describe('FeaturedProjectArticlesComponent', () => {
  let component: FeaturedProjectArticlesComponent;
  let fixture: ComponentFixture<FeaturedProjectArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProjectArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProjectArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
