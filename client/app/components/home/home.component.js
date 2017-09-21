import template from './home.html';
import './_home.scss';

class HomeController {

  constructor(Constants) {
    'ngInject';
    this.Constants = Constants;
    this.facts = this.Constants.facts;
    this.howToPlay = this.Constants.howToPlay;
  }

}

export default  {
  restrict: 'E',
  bindings: {
  },
  template,
  controller: HomeController,
  controllerAs: 'vm'
};
