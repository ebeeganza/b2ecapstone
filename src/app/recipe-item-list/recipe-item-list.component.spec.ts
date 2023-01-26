import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemListComponent } from './recipe-item-list.component';

describe('RecipeItemListComponent', () => {
  let component: RecipeItemListComponent;
  let fixture: ComponentFixture<RecipeItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
