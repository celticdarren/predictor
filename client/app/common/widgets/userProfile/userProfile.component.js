import template from './userProfile.html';
import './_userProfile.scss';

class UserProfileController {

  constructor(AuthService) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.getUser().then((res) => {
      this.user = res;
    });
  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: UserProfileController,
  controllerAs: 'vm'
};
