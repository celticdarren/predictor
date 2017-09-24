import DashComponent from './dash.component';

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
      }
    });
  })

  // Components
  .component('dash', DashComponent);

export default module.name;
