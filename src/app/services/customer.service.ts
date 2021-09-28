import { Injectable } from '@angular/core';
import { ApiHandlerService } from './api-handler.service';
import {environment as env} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private getCustomers = env.API_URL.CustomerService.GET_ALL_CUSTOMERS;  
  private viewCustomers = env.API_URL.CustomerService.GET_CUSTOMERS;

  constructor(private readonly apiService: ApiHandlerService) { }

  getCustomersList(){
    console.log(this.getCustomers);
    return this.apiService.get(`${this.getCustomers}`);
  }

  viewCustomer(id){
    console.log(this.viewCustomers);
    return this.apiService.get(`${this.viewCustomers}`+ "?userId="+ id);
  }
}
