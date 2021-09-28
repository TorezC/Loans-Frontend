import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import {Customer} from 'src/app/models/customer.model';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customerId: string = '';
  customerDetails: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private customer: CustomerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.customerId = res.id;
    });
    this.customer.viewCustomer(this.customerId).subscribe(res => {
      this.customerDetails = res['results'];
      console.log(this.customerDetails);
    }, err => {
        console.log(err);
    });
  }

}
