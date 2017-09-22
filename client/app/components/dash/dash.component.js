import template from './dash.html';
import './_dash.scss';
import * as firebase from 'firebase';

class DashController {

  constructor(Constants, $firebaseObject, $firebaseArray, AuthService, $scope, $state) {
    'ngInject';
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.$state = $state;
    this.user = this.AuthService.isLoggedIn(true);

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
