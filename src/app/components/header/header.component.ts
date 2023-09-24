import { Component } from '@angular/core';
import { PaginationService } from 'src/app/shared-services/pagination.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public pagServ: PaginationService){}

  nextPage(){
    console.log('next page')
    this.pagServ.nextPage();
    this.pagServ.setCurrentPage(this.pagServ.currentPage);

  }

  prevPage(){
    console.log('prev page')
    this.pagServ.prevPage();
    this.pagServ.setCurrentPage(this.pagServ.currentPage);
  }
}
