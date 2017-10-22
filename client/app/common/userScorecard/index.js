import UserScorecardComponent from './userScorecard.component';

const module = angular
  .module('app.common.userScorecard', [])
  .component('userScorecard', UserScorecardComponent);

export default module.name;
