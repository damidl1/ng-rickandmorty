import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  currentPage: number = 1;

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }


  nextPage(){
    this.currentPage++;


  }

  prevPage(){
    if (this.currentPage > 1) {
      this.currentPage--;

    }
  }
  constructor() { }
}
