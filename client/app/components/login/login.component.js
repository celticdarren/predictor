import template from './login.html';
import './_login.scss';
import * as firebase from 'firebase';

class LoginController {

  constructor(Constants, $firebaseObject, $firebaseArray, AuthService) {
    'ngInject';
    this.Constants = Constants;
    this.AuthService = AuthService;
    let ref = firebase.database().ref();
    let root = ref.child('scores');

    let isUser = null;

    // this.AuthService.login(user)
    //   .then(() => {
    //   console.log(this.AuthService.isLoggedIn());
    //   console.log("Logged in");
    //   this.testing = this.AuthService.isLoggedIn();
    // });

    this.testing = null;

    this.testing = firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.email);
        isUser = true;
      } else {
        console.log("Not logged in")
      }
    });

    this.logout = function () {
      this.AuthService.logout();
    };

    this.testing = isUser;

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

}

export default  {
  restrict: 'E',
  bindings: {},
  template,
  controller: LoginController,
  controllerAs: 'vm'
};
