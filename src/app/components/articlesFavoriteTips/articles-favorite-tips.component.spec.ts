import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFavoriteTipsComponent } from './articles-favorite-tips.component';

describe('ArticlesFavoriteTipsComponent', () => {
  let component: ArticlesFavoriteTipsComponent;
  let fixture: ComponentFixture<ArticlesFavoriteTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesFavoriteTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFavoriteTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});