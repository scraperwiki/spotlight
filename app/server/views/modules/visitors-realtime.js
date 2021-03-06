var requirejs = require('requirejs');

var View = requirejs('common/views/visualisations/visitors-realtime');
var template = requirejs('stache!common/templates/visualisations/visitors-realtime');



module.exports = View.extend({
  template: template,

  templateContext: function () {

    var value = this.getCurrentVisitors();
    var label;

    if (value === null) {
      value = this.noDataMessage;
      label = '';
    } else {
      label = this.format(value, { type: 'plural', singular: 'user' }) + ' online now';
    }

    return _.extend(View.prototype.templateContext.apply(this, arguments), {
      value: value,
      label: label
    });

  }

});