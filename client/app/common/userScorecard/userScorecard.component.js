import template from './userScorecard.html';
import './_userScorecard.scss';

class UserScorecardController {

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

  getTeamsScore(teamLocation, game) {
    return this.fixtureList.score.find((score) => {
      return score.$id === game;
    });
  }


}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: UserScorecardController,
  controllerAs: 'vm'
};
