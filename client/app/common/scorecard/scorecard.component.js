import template from './scorecard.html';
import './_scorecard.scss';

class ScorecardController {

  constructor(Constants, ScorecardService) {
    'ngInject';
    this.Constants = Constants;
    this.fixtures = this.Constants.fixtures;
    this.ScorecardService = ScorecardService;
    this.week = 1;
    this.fixtureList = null;
  }

  $onInit() {
    this.fixtureList = this.ScorecardService.getFixtures(this.week);
  }

  test() {
    this.ScorecardService.getFixtures(this.week);
  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: ScorecardController,
  controllerAs: 'vm'
};
