import PouchDB from 'pouchdb';

class ProspectService {
  constructor($http) {
    this.$http = $http;
    this.companiesDB = new PouchDB('companies');
  }

  getCompanies() {
    return this.companiesDB.allDocs({
      include_docs: true,
      attachements: true,
    })
    .then(response =>  this.parseResponse(response))
    .catch((err) => {
      console.log(err);
    });
  }

  setCompanies(data) {

    var companies = [];

    for (var i = 0; i < data.length; i++) {
      var company = data[i];
      companies.push({
        _id: company.siret,
        societe: company.societe,
        activite: company.activite,
        adresse: company.adresse,
        cp: company.cp,
        ville: company.ville,
        mobile: company.mobile,
        email: company.email,
        siret: company.siret,
        codeNaf: company.codeNaf,
        effectifs: company.effectifs,
      });
    }

    this.companiesDB.destroy().then((response) => {
      // success, recreate db
      this.companiesDB = new PouchDB('companies');

      // create docs
      this.companiesDB.bulkDocs(companies).then((result) => {
        // handle result
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  parseResponse(data) {
    var companies = [];
    for (var i = 0; i < data.total_rows; i++) {
      companies.push(data.rows[i].doc);
    }

    return companies;
  }

  destroyDB() {
    return this.companiesDB.destroy().then((response) => {
      console.log('destroyDB', response);

      //recreate
      this.companiesDB = new PouchDB('companies');
    }).catch((err) => {
      console.log(err);
    });
  }
}

ProspectService.$inject = ['$http'];

export default ProspectService;
