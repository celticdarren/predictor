import DashComponent from './dash.component';
import * as firebase from 'firebase';

const module = angular
  .module('app.components.dash', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.dash', {
      url: '/dash',
      views: {
        'content@app': {
          component: 'dash'
        }
      },
      resolve: {
        // controller will not be loaded until $requireSignIn resolves
        // Auth refers to our $firebaseAuth wrapper in the factory below
        "currentAuth": function(AuthService) {
          // $requireSignIn returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $routeChangeError (see above)
          return AuthService.firebaseAuth().$requireSignIn();
        }
      }
    });
  })


  // Components
  .component('dash', DashComponent);

export default module.name;
