import SiteNavModule from './siteNav';
import ScorecardModule from './scorecard';
import ConstantsModule from './constants';
import HeadingModule from './heading';
import AuthServiceModule from './auth';

const module = angular
  .module('app.common', [
    SiteNavModule,
    ScorecardModule,
    ConstantsModule,
    HeadingModule,
    AuthServiceModule
  ]);

export default module.name;
