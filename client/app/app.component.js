import template from './app.html';
import './app.scss';

class AppController {

  constructor(AuthService, $state) {
    'ngInject';
    AuthService.firebaseAuth().$onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log("Signed in as:", firebaseUser.uid);
      } else {
        if ($state.includes("app.loggedin")) {
          $state.go("app.login");
        }
      }
    });
  }

}

export default {
  template,
  controller: AppController,
  controllerAs: 'vm',
  bindToController: true,
  restrict: 'E'
};
