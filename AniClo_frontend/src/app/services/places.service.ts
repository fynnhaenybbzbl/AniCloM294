import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Places } from '../data/places';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  readonly backendUrl = 'places';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Places[]> {
    return this.http.get<Places[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Places> {
    return this.http.get<Places>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(places: Places): Observable<Places> {
    return this.http.put<Places>(environment.backendBaseUrl + 'updatePlace' + `/${places.id}`, places);
  }

  public save(places: Places): Observable<Places> {
    return this.http.post<Places>(environment.backendBaseUrl + 'postPlace', places);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + 'deletePlace' + `/${id}`, {observe: 'response'});
  }}
