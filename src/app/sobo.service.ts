import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoboService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/api/personaje';
  obtinePersonaje(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((eroare: HttpErrorResponse) => {
        console.log('eroare la obtinerea personajelor', eroare);
        return throwError(eroare);
      })
    );
  }
  adaugaPersonaj(nume: string, varsta: number): Observable<any[]> {
    const datePersonaj = { nume, varsta };
    return this.http.post<any>(this.apiUrl, datePersonaj).pipe(
      catchError((eroare: HttpErrorResponse) => {
        console.log('eroare la obtinerea personajului ', eroare);
        return throwError(eroare);
      })
    );
  }
}
