import LoggedOutComponent from './loggedOut.component';

const module = angular
  .module('app.components.loggedOut', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.loggedOut', {
      url: '/loggedout',
      views: {
        'content@app': {
          component: 'loggedOut'
        }
      },
      resolve: {
        "currentAuth": function(AuthService) {
          return AuthService.firebaseAuth().$waitForSignIn();
        }
      }
    });
  })

  // Components
  .component('loggedOut', LoggedOutComponent);

export default module.name;
