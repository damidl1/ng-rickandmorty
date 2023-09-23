import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { Observable, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharService {

  selectedChar = '';

  BASE_URL = 'https://rickandmortyapi.com/api/character/'

  constructor(private http: HttpClient) { }



  getAllChars(): Observable<Character[]>{

    return this.http.get<any>(this.BASE_URL).pipe(
      map(charObj => charObj.results),
      catchError(err => {
        console.log(err);
        return []
      })
    )
  }

 }
