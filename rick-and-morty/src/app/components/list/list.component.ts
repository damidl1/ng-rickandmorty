import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { CharService } from 'src/app/services/char.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  chars: Character[] = [];

  constructor(private charServ: CharService, private router: Router){}

  ngOnInit(): void {
    this.charServ.getAllChars().subscribe(data => this.chars = data);

  }

}
