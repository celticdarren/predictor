import template from './loggedOut.html';
import './_loggedOut.scss';
import * as firebase from 'firebase';

class LoggedOutController {

  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  onHomePageClick() {
    this.$state.go("app.home");
  }
}

export default  {
  restrict: 'E',
  bindings: {},
  template,
  controller: LoggedOutController,
  controllerAs: 'vm'
};
