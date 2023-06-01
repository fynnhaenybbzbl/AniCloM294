import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Size } from '../data/size';
import {Observable} from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  readonly backendUrl = 'size';

  constructor(private http: HttpClient) {
  }

  public getList(): Observable<Size[]> {
    return this.http.get<Size[]>(environment.backendBaseUrl + this.backendUrl);
  }

  public getOne(id: number): Observable<Size> {
    return this.http.get<Size>(environment.backendBaseUrl + this.backendUrl + `/${id}`);
  }

  public update(Size: Size): Observable<Size> {
    return this.http.put<Size>(environment.backendBaseUrl + 'updateSize' + `/${Size.id}`, Size);
  }

  public save(Size: Size): Observable<Size> {
    return this.http.post<Size>(environment.backendBaseUrl + 'postSize', Size);
  }

  public delete(id: number): Observable<HttpResponse<string>> {
    return this.http.delete<string>(environment.backendBaseUrl + 'deleteSize' + `/${id}`, {observe: 'response'});
  }}
