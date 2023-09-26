import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { PaginationService } from '../shared-services/pagination.service';


@Injectable({
  providedIn: 'root'
})
export class CharService {

  allCharacters = new BehaviorSubject<Character[]>([]);

  readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  pageNumber = 1;


  constructor(private http: HttpClient) {
    this.getAllChars();
  }



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


  getAllChars(): void{
      this.http.get<any>(this.BASE_URL + 'character?page=' + this.pageNumber).pipe(
      map(data => data.results)
    ).subscribe(characters => this.allCharacters.next(characters));
  }


  prevPage(){
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getAllChars();
    }
  }

  nextPage(){
    this.pageNumber ++;
    this.getAllChars();
  }

 }
