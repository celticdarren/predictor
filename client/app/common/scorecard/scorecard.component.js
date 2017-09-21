import template from './scorecard.html';
import './_scorecard.scss';

class ScorecardController {

  constructor(Constants) {
    'ngInject';
    this.Constants = Constants;
    this.fixtures = this.Constants.fixtures;
  }

  $onInit() {

  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: ScorecardController,
  controllerAs: 'vm'
};
