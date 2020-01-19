import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Icons } from '../../../shared/icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormErrorStateMatcher } from 'src/app/core/handlers/form-error-state-matcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @Input() user;

  loginForm: FormGroup;
  matcher = new FormErrorStateMatcher();
  message = '';

  img_Holcim = Icons.img_Holcim;
  iCheckLogo = Icons.iCheckLogo;
  userIcon = Icons.userIcon;
  passwordIcon = Icons.passwordIcon;



  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    console.log('Input: ', this.user);
  }

  onLogin() {
    this.router.navigate(['home']);
  }
}
