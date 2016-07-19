import controller from './prospect-loadfile.controller';
import prospectLoadfileTemplate from './prospect-loadfile.template.html';

const ProspectLoadfileComponent = {
  bindings: {
    onLoadCompanies: '&',
  },
  controller,
  template: prospectLoadfileTemplate,
};

export default ProspectLoadfileComponent;
