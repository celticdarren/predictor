import template from './login.html';
import './_login.scss';
import * as firebase from 'firebase';

class LoginController {

  constructor(Constants, $firebaseObject, $firebaseArray, AuthService, $scope, $state) {
    'ngInject';
    console.log(`Login running`);
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.$state = $state;
    let ref = firebase.database().ref();
    let root = ref.child('scores');

    this.loginUser = {email: null, password: null};
    this.registerUser = {
      fName: null,
      sName: null,
      email: null,
      password: null
    };

    if (this.AuthService.isLoggedIn() != null) {
      this.$state.go('app.loggedin.dash');
    }
  }

  onLogIn() {
    const user = this.loginUser;
    this.AuthService.login(user)
      .then(() => {
        this.$state.go("app.loggedin.dash")
      }, function (reason) {
        alert(`Failed because ${reason}`)
      });
  }

  onRegister() {
    const registerUser = this.registerUser;
    this.AuthService.register(registerUser).then(() => {
      this.$state.go("app.loggedin.dash")
    }, function (reason) {
      alert(`Failed because ${reason}`)
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
