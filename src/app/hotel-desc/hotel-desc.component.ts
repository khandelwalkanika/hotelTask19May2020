import { Component, OnInit } from '@angular/core';
import { Hotels } from "../hotel-data"
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hotel } from '../hotel.model';
const DaywisePrices = {
  0: 1000,
  1: 1200,
  2: 1200,
  3: 1200,
  4: 1200,
  5: 900,
  6: 1000
}


@Component({
  selector: 'app-hotel-desc',
  templateUrl: './hotel-desc.component.html',
  styleUrls: ['./hotel-desc.component.css']
})
export class HotelDescComponent implements OnInit {
  id: number;
  hotelData: any;
  hotels = Hotels
  hotel: Hotel;

  // hotel = this.hotels[1].name;
  price: number = 0;
  constructor(private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.hotel = this.hotels.find(x => x.id === this.id)
        }
      );

    this.route.data.subscribe(data => {
      this.hotelData = data;
    })
  }

  onSubmit({ valid, value }: NgForm) {
    if (!valid) {
      return;
    }
    const numOfDays = (new Date(value.todate).getTime() - new Date(value.fromdate).getTime()) / (24 * 3600 * 1000);
    const numRooms = Number(value.roomNum);
    const startDay = new Date(value.fromdate).getDay();
    const endDay = new Date(value.todate).getDay();
    const checkoutTime = Number(value.checkoutTime.replace(':', ''));

    this.price = 0
    for (let i = 0; i < numOfDays; i++) {
      this.price += DaywisePrices[new Date(new Date(value.fromdate).getTime() + 24 * 3600 * 1000 * i).getDay()]
    }
    // if he checkout post 11 am !!! 
    if (checkoutTime > 1100) {
      this.price += DaywisePrices[endDay]
      
    }
    this.price = this.price * numRooms;
    console.log("price", this.price)
    this.router.navigate(['/invoice'], { state: { data: { ...value, price: this.price } } })
  }
}
