import angular from 'angular';

class ProspectController {
  constructor($scope, ProspectService, $timeout) {
    this.prospectService = ProspectService;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.companies = this.companies.currentValue;
  }

  $onChanges(changes) {
    if (changes.companies) {
      this.companies = Object.assign({}, changes.companies);
    }
  }

  loadCompanies(companies) {
    //Check if $digest is already in progress
    this.$timeout(() => {
      //any code in here will automatically have an apply run afterwards
      this.companies = companies;
    });
  }

  cleanCompanies() {
    this.prospectService.destroyDB().then(() => {
      this.$scope.$apply(() => {
        this.companies = [];
      });

      //TODO try tonot use jquery
      //Clean file uploaded
      $('#inputFile').val(null);
    });
  }
}

ProspectController.$inject = ['$scope', 'ProspectService', '$timeout'];

export default ProspectController;
