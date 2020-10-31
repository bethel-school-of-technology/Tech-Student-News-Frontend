import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesTipsArticlesComponent } from './favorites-tips-articles.component';

describe('FavoritesTipsArticlesComponent', () => {
  let component: FavoritesTipsArticlesComponent;
  let fixture: ComponentFixture<FavoritesTipsArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesTipsArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesTipsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
