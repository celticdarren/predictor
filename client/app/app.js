import angular from 'angular';
import * as firebase from 'firebase';
import FirebaseModule from 'angularfire';
import CommonModule from './common';
import ComponentsModule from './components';
import AppComponent from './app.component';
import AngularSanitize from 'angular-sanitize';
import AngularUiRouter from 'angular-ui-router';
import 'angular-touch';

angular
  .module('app', [
    AngularSanitize,
    AngularUiRouter,
    CommonModule,
    ComponentsModule,
    FirebaseModule
  ])

  // Application config
  .config(($locationProvider, $urlRouterProvider, $stateProvider) => {
    'ngInject';

    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          'root@': {
            component: 'app'
          }
        }
      });
  })
  .config(function(){
    let config = {
      apiKey: "AIzaSyAh3ejQCmSuxUycuvXBdg8lgT1S_yGN5UU",
      authDomain: "predictor-3c838.firebaseapp.com",
      databaseURL: "https://predictor-3c838.firebaseio.com",
      projectId: "predictor-3c838",
      storageBucket: "predictor-3c838.appspot.com",
      messagingSenderId: "721249192873"
    };
    firebase.initializeApp(config);
  })

  .run(($transitions, $location, $window) => {
    'ngInject';

    $transitions.onSuccess({}, (transition) => {
      const name = transition.targetState().name();
      const page = "/" + name.replace(/\./g, '/');
    });
  })

  // Components
  .component('app', AppComponent);

angular.bootstrap(document, ["app"], {strictDi: true});
