import WeekLeaderModule from './weekLeader';
import UserProfileModule from './userProfile';

const module = angular
  .module('app.common.widgets', [
    WeekLeaderModule,
    UserProfileModule
  ]);

export default module.name;
