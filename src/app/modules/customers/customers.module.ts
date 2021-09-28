import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewCustomerComponent } from './view-customer/view-customer.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ListCustomersComponent,
    AddCustomersComponent,
    EditCustomersComponent,
    DeleteCustomersComponent,
    SearchCustomersComponent,
    ViewCustomerComponent,
    
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule
  ]
})
export class CustomersModule { }
