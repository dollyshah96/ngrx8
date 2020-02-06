import { Component, OnInit } from '@angular/core';
import * as UserActions from './store/user.actions';
import { Store, select } from '@ngrx/store';
import { UserState } from './store/user.reducer';
import { allUsers } from './store/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public users = [];
  constructor(private store: Store<UserState>) { }

  ngOnInit() {
    this.store.dispatch(UserActions.GetUser());
  }

  getData() {

    this.store.pipe(select(allUsers)).subscribe(res => {
      console.log('res', res['users'].data);
      this.users = res['users'].data;
    });
  }
}
