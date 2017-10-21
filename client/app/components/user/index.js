import UserComponent from './user.component';

const module = angular
  .module('app.components.user', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.loggedin.user', {
      url: '/user',
      views: {
        'content@app': {
          component: 'user'
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
  .component('user', UserComponent);

export default module.name;
