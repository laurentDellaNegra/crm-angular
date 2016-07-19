import xlsx from 'xlsx';
import angular from 'angular';
import companiesJSON from './dummy/companies.json';

class ProspectLoadfileController {

  constructor($element, ProspectService) {
    this.$element = $element;
    this.prospectService = ProspectService;

    this.$element.bind('change', (changeEvent) => {
      var file = changeEvent.target.files[0];
      var reader = new FileReader();
      reader.onload = (loadEvent) => {
        this.onLoadCompanies({ companies: this.parseFile(loadEvent.target.result) });
      };

      reader.readAsBinaryString(file);
    });
  }

  importLocalFile(companies) {
    this.onLoadCompanies({ companies: companiesJSON });
  }

  parseFile(data) {
    var workbook = xlsx.read(data, { type: 'binary' });
    var firstSheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[firstSheetName];
    var jsonObj = xlsx.utils.sheet_to_json(worksheet);

    var companies = [];

    for (var i = 0; i < jsonObj.length; i++) {
      var companyRaw = jsonObj[i];
      var company = {
        societe: companyRaw.Société,
        activite: companyRaw.Activité,
        adresse: companyRaw.Adresse,
        cp: companyRaw['C.P.'],
        ville: companyRaw.Ville,
        mobile: companyRaw.Mobile,
        email: companyRaw.Email,
        siret: companyRaw.Siret,
        codeNaf: companyRaw['Code Naf'],
        effectifs: companyRaw.Effectifs,
      };
      companies.push(company);
    }

    //insert db
    this.prospectService.setCompanies(companies);

    return companies;
  }
}
ProspectLoadfileController.$inject = ['$element', 'ProspectService'];

export default ProspectLoadfileController;
