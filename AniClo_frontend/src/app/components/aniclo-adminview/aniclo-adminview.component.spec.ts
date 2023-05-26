import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnicloAdminviewComponent } from './aniclo-adminview.component';

describe('AnicloAdminviewComponent', () => {
  let component: AnicloAdminviewComponent;
  let fixture: ComponentFixture<AnicloAdminviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnicloAdminviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnicloAdminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
