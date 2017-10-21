import template from './weekLeader.html';
import './_weekLeader.scss';

class WeekLeaderController {

  constructor() {
    'ngInject';
    this.leader = {
      name: "Darren",
      points: 34
    }
  }

}

export default {
  restrict: 'E',
  bindings: {},
  template,
  controller: WeekLeaderController,
  controllerAs: 'vm'
};
