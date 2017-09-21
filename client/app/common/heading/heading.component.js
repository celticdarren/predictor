import template from './heading.html';
import './_heading.scss';

class HeadingController {

  constructor() {
    'ngInject';
    
  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: HeadingController,
  controllerAs: 'vm'
};
