import HomeModule from './home';
import LoginModule from './login';
import DashModule from './dash';
import UserModule from './user';
import LoggedOutModule from './loggedOut';
import LoggedInModule from './loggedin';

const module = angular.module('app.components', [
  HomeModule,
  LoginModule,
  DashModule,
  UserModule,
  LoggedOutModule,
  LoggedInModule
]);

export default module.name;
