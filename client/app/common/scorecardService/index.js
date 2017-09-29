import ScorecardService from './scorecard.service';

const module = angular
  .module('app.common.scorecardService', [])
  .service('ScorecardService', ScorecardService);

export default module.name;
