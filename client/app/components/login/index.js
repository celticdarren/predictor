import LoginComponent from './login.component';

const module = angular
  .module('app.components.login', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.login', {
      url: '/login',
      views: {
        'content@app': {
          component: 'login'
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
  .component('login', LoginComponent);

export default module.name;
