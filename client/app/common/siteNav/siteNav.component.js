import template from './siteNav.html';
import './_siteNav.scss';

class SiteNavController {

  constructor(AuthService, $state) {
    'ngInject';
    this.AuthService = AuthService;
    this.$state = $state;
    this.isLoggedIn = this.AuthService.isLoggedIn();
    this.isNavOpen = false;
  }

  onNavClick() {
    this.isNavOpen = !this.isNavOpen;
  }

  onLogOut() {
    this.AuthService.logout();
  }
}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: SiteNavController,
  controllerAs: 'vm'
};
