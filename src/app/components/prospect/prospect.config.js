import ProspectComponent from './prospect.component';

export default function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('prospect', {
      url: '/prospect',
      template: '<prospect companies="$resolve.companiesData"></prospect>',
      resolve: {
        companiesData: ProspectService => ProspectService.getCompanies(),
      },
    });
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
