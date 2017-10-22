import UserProfileComponent from './userProfile.component';

const module = angular
  .module('app.common.userProfile', [])
  .component('userProfile', UserProfileComponent);

export default module.name;
