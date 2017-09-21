import SiteNavModule from './siteNav';
import ScorecardModule from './scorecard';
import ConstantsModule from './constants';
import HeadingModule from './heading';

const module = angular
  .module('app.common', [
    SiteNavModule,
    ScorecardModule,
    ConstantsModule,
    HeadingModule
  ]);

export default module.name;
