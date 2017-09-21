import SiteNavComponent from './siteNav.component';

const module = angular
  .module('app.common.siteNav', [])
  .component('siteNav', SiteNavComponent);

export default module.name;
