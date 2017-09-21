import HomeModule from './home';
import LoginModule from './login';

const module = angular.module('app.components', [
  HomeModule,
  LoginModule
]);

export default module.name;
