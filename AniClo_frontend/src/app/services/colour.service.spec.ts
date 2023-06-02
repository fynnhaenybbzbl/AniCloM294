import {TestBed} from '@angular/core/testing';

import {ColourService} from './colour.service';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Colour} from '../data/colour';

fdescribe('ColourService', () => {
  let service: ColourService;
  let httpSpy: Spy<HttpClient>;

  const fakeColours: Colour[] = [
    {
      id: 1,
      farbe: 'Rot'
    },
    {
      id: 2,
      farbe: 'Blau'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    });
    service = TestBed.inject(ColourService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a list of colours', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeColours);

    service.getList().subscribe({
        next:
          colours => {
            expect(colours).toHaveSize(fakeColours.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });
  it('should create a new colour', (done: DoneFn) => {

    const newColour: Colour = {
      id: 3,
      farbe: 'Gelb'
    };

    httpSpy.post.and.nextWith(newColour);

    service.save(newColour).subscribe({
        next: department => {
          expect(department).toEqual(newColour);
          done();
        },
        error: done.fail
      }
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update an colour', (done: DoneFn) => {

    const colour = fakeColours[0];
    colour.farbe = 'Updated Colour';

    httpSpy.put.and.nextWith(colour);

    service.update(colour).subscribe({
      next: colour => {
        expect(colour.farbe).toEqual('Updated Colour');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing colour', (done: DoneFn) => {

    httpSpy.delete.and.nextWith(new HttpResponse({
      status: 200
    }));

    service.delete(1).subscribe({
      next: response => {
        expect(response.status).toBe(200);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });
});
