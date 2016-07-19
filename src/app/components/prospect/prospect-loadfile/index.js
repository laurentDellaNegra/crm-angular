import angular from 'angular';
import ProspectLoadfileComponent from './prospect-loadfile.component';

const prospectLoadfile = angular
  .module('prospect.loadfile', [])
  .component('prospectLoadfile', ProspectLoadfileComponent)
  .name;

export default prospectLoadfile;
