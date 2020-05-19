import { Component, OnInit } from '@angular/core';
// import { }
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  data: any;
  constructor(/* private route: ActivatedRoute,
    private router: Router */) { }

  ngOnInit(): void {
    console.log(history.state.data)
    this.data = history.state.data;
    this.data.finalPrice = this.data.price* 1.18;
  }


}
