import WeekLeaderComponent from './weekLeader.component';

const module = angular
  .module('app.common.weekLeader', [])
  .component('weekLeader', WeekLeaderComponent);

export default module.name;
