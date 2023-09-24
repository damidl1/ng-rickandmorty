import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { CharService } from 'src/app/services/char.service';
import { PaginationService } from 'src/app/shared-services/pagination.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  chars: Character[] = [];

  constructor(private charServ: CharService, private router: Router, public pagServ: PaginationService){}

  ngOnInit(): void {
    this.charServ.getAllChars().subscribe(charData => this.chars = charData);

  }

}
