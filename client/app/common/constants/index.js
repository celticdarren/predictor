import constants from './constants.js';

const module = angular
  .module('sp.cca.common.constants', [])
  .constant('Constants', constants);

export default module.name;
