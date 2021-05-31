import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import Customer from '../customers.model'; //PostI.interface.ts
import { CustomersService } from '../customerService/customers.service';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
})
export class EditCustomerComponent implements OnInit {

  @Input() customerInput?: Customer;

  constructor(
    private CustomersService: CustomersService,
    private fb: FormBuilder
    ) {}

  public editCustomerForm =  this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl(''),
    phone: new FormControl(''),
    priority: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  });

  ngOnInit(){
    this.initValuesForm();
  }

  editCustomer(data: Customer) {
     console.log('Nuevo cliente', data);
     this.customerInput = data;
    // this.saveCustomer();
  }

  private initValuesForm(): void {
    this.editCustomerForm.patchValue({
      id: this.customerInput?.id,
      name: this.customerInput?.name,
      email: this.customerInput?.email,
      phone: this.customerInput?.phone,
      priority: [this.customerInput?.priority],
      company: this.customerInput?.company,
      customerType: [this.customerInput?.customerType],
    });


  }
}
