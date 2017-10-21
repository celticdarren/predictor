import HomeModule from './home';
import LoginModule from './login';
import DashModule from './dash';

const module = angular.module('app.components', [
  HomeModule,
  LoginModule,
  DashModule
]);

export default module.name;
