import { makeAutoObservable } from 'mobx';

class Auth {
  authStatus = false;
  user = {
    token: null,
    name: null,
    pass: null,
  };

  login(token, name, pass) {
    this.user.token = token;
    this.user.name = name;
    this.user.pass = pass;
  }
  constructor() {
    makeAutoObservable(this);
  }
}

export default new Auth();
