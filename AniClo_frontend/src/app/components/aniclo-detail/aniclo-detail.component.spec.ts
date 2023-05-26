import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnicloDetailComponent } from './aniclo-detail.component';

describe('AnicloDetailComponent', () => {
  let component: AnicloDetailComponent;
  let fixture: ComponentFixture<AnicloDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnicloDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnicloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
