import template from './scorecard.html';
import './_scorecard.scss';
import * as firebase from 'firebase';

class ScorecardController {

  constructor(Constants, ScorecardService, $firebaseArray) {
    'ngInject';
    this.Constants = Constants;
    this.fixtures = this.Constants.fixtures;
    this.ScorecardService = ScorecardService;
    this.week = 1;
    this.fixtureList = null;
    this.$firebaseArray = $firebaseArray;
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
  controller: ScorecardController,
  controllerAs: 'vm'
};
