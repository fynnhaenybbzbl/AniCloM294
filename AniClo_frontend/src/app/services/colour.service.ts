import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colour } from '../data/colour';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColourService {

  readonly backendUrl = 'colour';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Colour[]> {
    return this.http.get<Colour[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Colour> {
    return this.http.get<Colour>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Colour: Colour): Observable<Colour> {
    return this.http.put<Colour>(environment.backendBaseUrl + 'updateColour' + `/${Colour.id}`, Colour);
  }

  public save(Colour: Colour): Observable<Colour> {
    return this.http.post<Colour>(environment.backendBaseUrl + 'postColour', Colour);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + 'deleteColour' + `/${id}`, {observe: 'response'});
  }}
