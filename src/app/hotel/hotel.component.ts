import { Component, OnInit } from '@angular/core';
import {Hotels} from "../hotel-data"


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels = Hotels

  constructor() { }

  ngOnInit(): void {
  }

}
