import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import {Customer} from 'src/app/models/customer.model';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  allCustomersList: any;
  allCustomers: any;

  constructor(private http: HttpClient, private customer: CustomerService) { }

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(){
    this.customer.getCustomersList().subscribe((res: any[]) => {
      this.allCustomers = res;
      this.allCustomersList = this.allCustomers.result;
      console.log(this.allCustomersList);
      console.log(res);

    }, err => {
        console.log(err);
    });

  }
}
