import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clothing } from '../data/clothing';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClothingService {

  readonly backendUrl = 'clothing';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Clothing> {
    return this.http.get<Clothing>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Clothing: Clothing): Observable<Clothing> {
    return this.http.put<Clothing>(environment.backendBaseUrl + 'updateClothing' + `/${Clothing.id}`, Clothing);
  }

  public save(Clothing: Clothing): Observable<Clothing> {
    return this.http.post<Clothing>(environment.backendBaseUrl + 'postClothing', Clothing);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + 'deleteClothing' + `/${id}`, {observe: 'response'});
  }}
