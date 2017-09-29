import template from './dash.html';
import './_dash.scss';
import * as firebase from 'firebase';

class DashController {

  constructor(Constants, AuthService, $scope, $state, $firebaseArray) {
    'ngInject';
    console.log(`Dash running`);
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.$state = $state;
    this.user = this.AuthService.getUser();
    this.week = 1;
    const ref = firebase.database().ref("fixtures/week1");
    // create a synchronized array
    // click on `index.html` above to see it used in the DOM!
    this.messages = $firebaseArray(ref);
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
