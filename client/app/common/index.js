import SiteNavModule from './siteNav';
import ScorecardModule from './scorecard';
import ConstantsModule from './constants';
import HeadingModule from './heading';
import AuthServiceModule from './auth';
import ScorecardServiceModule from './scorecardService';
import WidgetsModule from './widgets';

const module = angular
  .module('app.common', [
    SiteNavModule,
    ScorecardModule,
    ConstantsModule,
    HeadingModule,
    AuthServiceModule,
    ScorecardServiceModule,
    WidgetsModule
  ]);

export default module.name;
