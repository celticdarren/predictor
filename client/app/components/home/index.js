import HomeComponent from './home.component';

const module = angular
  .module('app.components.home', [])

  // View state config
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('app.home', {
      url: '/',
      views: {
        'content@app': {
          component: 'home'
        }
      },
      resolve: {
        // controller will not be loaded until $requireSignIn resolves
        // Auth refers to our $firebaseAuth wrapper in the factory below
        "currentAuth": function(AuthService) {
          // $requireSignIn returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $routeChangeError (see above)
          return AuthService.firebaseAuth().$waitForSignIn();
        }
      }
    });
  })

  // Components
  .component('home', HomeComponent);

export default module.name;
