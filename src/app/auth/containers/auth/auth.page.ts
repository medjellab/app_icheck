import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';
import * as fromStore from '../../store';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AuthPage implements OnInit {

  constructor(private store: Store<fromStore.UsersState>) { }

  ngOnInit() {
    this.store.select<any>('users').subscribe(state => {
      console.log(state);
    });
  }

}
