const module = angular
  .module('app.components.loggedIn', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.loggedin', {
      url: '/loggedin',
      abstract: true
    });
  });

export default module.name;
