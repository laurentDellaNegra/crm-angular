import angular from 'angular';
import Prospect from './prospect';

const components = angular
  .module('app.components', [
    Prospect,
  ])
  .name;

export default components;
