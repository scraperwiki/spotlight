var requirejs = require('requirejs');
var path = require('path');

var templater = require('../mixins/templater');

var BaseView = require('./govuk');
var FilteredListView = requirejs('common/views/filtered_list');

module.exports = BaseView.extend(templater).extend({

  getPageTitle: function () {
    return 'Services - GOV.UK';
  },

  getBreadcrumbCrumbs: function () {
    return [
      {'path': '/performance', 'title': 'Performance'},
      {'title': 'Services'}
    ];
  },

  getContent: function () {

    var list = new FilteredListView({
      model: this.model,
      collection: this.collection
    });

    list.render();

    return this.loadTemplate(path.resolve(__dirname, '../templates/services.html'), {
      list: list.html,
      filter: this.model.get('filter'),
      departments: this.model.get('departments'),
      departmentFilter: this.model.get('departmentFilter'),
      agencies: this.model.get('agencies'),
      agencyFilter: this.model.get('agencyFilter')
    });

  }

});
