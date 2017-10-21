import template from './dash.html';
import './_dash.scss';
import * as firebase from 'firebase';

class DashController {

  constructor(Constants, AuthService, $scope, $state, $firebaseArray) {
    'ngInject';
    console.log(`Dash running`);
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.user = this.AuthService.getUser();
  }

  onLogOut() {
    this.AuthService.logout();
  }

}

export default  {
  restrict: 'E',
  bindings: {},
  template,
  controller: DashController,
  controllerAs: 'vm'
};
