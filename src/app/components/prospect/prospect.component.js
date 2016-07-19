import controller from './prospect.controller';
import prospectTemplate from './prospect.template.html';

const ProspectComponent = {
  bindings: {
    companies: '<',
  },
  controller,
  template: prospectTemplate,
};

export default ProspectComponent;
