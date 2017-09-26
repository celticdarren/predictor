import template from './dash.html';
import './_dash.scss';
import * as firebase from 'firebase';

class DashController {

  constructor(Constants, AuthService, $firebaseObject, $firebaseArray, $scope) {
    'ngInject';
    this.Constants = Constants;
    this.AuthService = AuthService;
    let root = firebase.database().ref("fixtures/week1/teams/home");
    let fixture = firebase.database().ref("fixtures/week1/teams/home");
    this.fixtures = null;
    this.user = this.AuthService.isLoggedIn(true);

// Attach an asynchronous callback to read the data at our posts reference
    fixture.on("value", (snapshot) => {
      this.fixtures = snapshot.val();
      $scope.$applyAsync();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });

    // this.AuthService.login(user)
    //   .then(() => {
    //   console.log(this.AuthService.isLoggedIn());
    //   console.log("Logged in");
    //   this.testing = this.AuthService.isLoggedIn();
    // });
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
