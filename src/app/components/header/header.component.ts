import { Component } from '@angular/core';
import { CharService } from 'src/app/services/char.service';
import { PaginationService } from 'src/app/shared-services/pagination.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public charServ: CharService){}

  nextPage(){
    this.charServ.nextPage();

  }

  prevPage(){
   this.charServ.prevPage();
  }

}
