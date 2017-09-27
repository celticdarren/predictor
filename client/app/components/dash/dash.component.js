import template from './dash.html';
import './_dash.scss';
import * as firebase from 'firebase';

class DashController {

  constructor(Constants, AuthService,$firebaseAuth, $firebaseObject, $firebaseArray, $scope, $state) {
    'ngInject';
    console.log(`Dash running`);
    this.Constants = Constants;
    this.AuthService = AuthService;
    let root = firebase.database().ref("fixtures/week1/teams/home");
    let fixture = firebase.database().ref("fixtures/week1/teams/home");
    this.fixtures = null;
    this.$state = $state;
    this.user = this.AuthService.getUser();



// Attach an asynchronous callback to read the data at our posts reference
    fixture.on("value", (snapshot) => {
      this.fixtures = snapshot.val();
      $scope.$applyAsync();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
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
