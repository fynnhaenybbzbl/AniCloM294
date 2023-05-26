import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnicloClothingComponent } from './aniclo-clothing.component';

describe('AnicloClothingComponent', () => {
  let component: AnicloClothingComponent;
  let fixture: ComponentFixture<AnicloClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnicloClothingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnicloClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
