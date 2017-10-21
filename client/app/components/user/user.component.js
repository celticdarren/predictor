import template from './user.html';
import './_user.scss';

class UserController {

  constructor(Constants, AuthService) {
    'ngInject';
    console.log(`Dash running`);
    this.Constants = Constants;
    this.AuthService = AuthService;
    this.user = this.AuthService.getUser();
  }

}

export default  {
  restrict: 'E',
  bindings: {},
  template,
  controller: UserController,
  controllerAs: 'vm'
};