import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class AuthService {

  private canLogin: boolean = false;
  showMenubarEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  doLogin(user:User) {

    if (user.username === 'me@foo.com' && user.password === '123456') {
      this.canLogin = true;
      this.showMenubarEmitter.emit(true);
      this.router.navigate(['/home']);
    }
    else {
      this.showMenubarEmitter.emit(false);
      this.canLogin = false;
    }
  }

  userCanLogin() {
    return this.canLogin;
  }
}
