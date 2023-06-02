import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesComponent } from './places.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createSpyFromClass } from 'jasmine-auto-spies';

fdescribe('PlacesComponent', () => {
  let component: PlacesComponent;
  let fixture: ComponentFixture<PlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,

      ],
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
