//Router component
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ProspectComponent from './prospect.component';
import ProspectService from './prospect.service';
import config from './prospect.config';
import ProspectLoadfileComponent from './prospect-loadfile';

const prospect = angular
  .module('prospect', [uiRouter, ProspectLoadfileComponent])
  .component('prospect', ProspectComponent)
  .service('ProspectService', ProspectService)
  .config(config)
  .name;

export default prospect;
