import template from './login.html';
import './_login.scss';
import * as firebase from 'firebase';

class LoginController {

  constructor(Constants, $firebaseObject, $firebaseArray, AuthService, $scope, $state) {
    'ngInject';
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.$state = $state;
    let ref = firebase.database().ref();
    let root = ref.child('scores');

    this.loginUser = {email: null, password: null};
    this.username = "";
    this.user = this.AuthService.isLoggedIn();

    if(this.user != null) {
      console.log("yes");
      this.$state.go('app.dash')
    } else {
      console.log("no")
    }

    // var obj = $firebaseObject(ref);
    // debugger;
    // // to take an action after the data loads, use the $loaded() promise
    // obj.$loaded().then(function() {
    //   console.log(obj.scores);
    //   // To iterate the key/value pairs of the object, use angular.forEach()
    //   angular.forEach(obj, function(value, key) {
    //     console.log(key, value);
    //   });
    // });

  }

  onLogOut() {
    this.AuthService.logout();
  }

  onLogIn() {
    const user = this.loginUser;
    this.AuthService.login(user)
      .then(() => {
        console.log(this.AuthService.isLoggedIn());
      });
  }

}

export default  {
  restrict: 'E',
  bindings: {},
  template,
  controller: LoginController,
  controllerAs: 'vm'
};
