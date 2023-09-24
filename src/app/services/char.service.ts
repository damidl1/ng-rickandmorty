import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { Observable, catchError, map, tap } from 'rxjs';
import { PaginationService } from '../shared-services/pagination.service';


@Injectable({
  providedIn: 'root'
})
export class CharService {

  selectedChar = '';

  BASE_URL = 'https://rickandmortyapi.com/api/character?page=';


  constructor(private http: HttpClient, public pagServ: PaginationService) { }



  // getAllChars(): Observable<Character[]>{

  //   return this.http.get<any>(this.BASE_URL).pipe(
  //     tap(charObj => console.log(charObj)),
  //     map(charObj => charObj.results),
  //     catchError(err => {
  //       console.log(err);
  //       return []
  //     })
  //   )
  // }


  getAllChars(): Observable<Character[]>{
    const url = `${this.BASE_URL}?page=${this.pagServ.currentPage}`;

    return this.http.get<any>(url).pipe(
      tap(charObj => console.log(charObj)),
      map(charObj => charObj.results),
      catchError(err => {
        console.log(err);
        return [];
      })
    )
  }

 }
