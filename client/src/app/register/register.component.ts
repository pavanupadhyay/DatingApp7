import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private accountservice: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void { }

  register() {
    this.accountservice.register(this.model).subscribe({
      next: () => {
        this.toastr.success('');
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    })
  }

  cancel() { this.cancelRegister.emit(false); }

}
