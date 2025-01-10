import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RareDisease } from '../models/rare-disease';

@Injectable({
  providedIn: 'root'
})
export class RareDiseaseService {
  private apiUrl = 'http://localhost:3000/rareDiseases';

  constructor(private http: HttpClient) {}

  getDiseases(): Observable<RareDisease[]>{
    return this.http.get<RareDisease[]>(this.apiUrl);
  }

  addDisease(disease: RareDisease): Observable<RareDisease>{
    return this.http.post<RareDisease>(this.apiUrl, disease);
  }

  updateDisease(disease: RareDisease): Observable<RareDisease> {
    return this.http.put<RareDisease>(`${this.apiUrl}/${disease.id}`, disease);
  }

  deleteDisease(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
