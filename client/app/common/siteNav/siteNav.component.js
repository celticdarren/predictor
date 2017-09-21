import template from './siteNav.html';
import './_siteNav.scss';

class SiteNavController {

  constructor() {
    'ngInject';
    this.isNavOpen = false;
  }

  onNavClick() {
    this.isNavOpen = !this.isNavOpen;
  }
}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: SiteNavController,
  controllerAs: 'vm'
};
