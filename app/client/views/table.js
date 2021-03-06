define([
  'backbone',
  'modernizr'
],
function (Backbone, Modernizr) {

  return Backbone.View.extend({

    render: function () {

      if (Modernizr.touch) {
        this.$('table').addClass('touch-table');
      }

      this.$('table').removeClass('floated-header');
      var headers = this.$('table').find('thead th'),
          body = this.$('table').find('tbody td');

      headers.attr('width', '');
      body.attr('width', '');

      if (body.length > headers.length) {
        _.each(headers, function (th, index) {
          th.width = th.offsetWidth;
          body[index].width = th.offsetWidth;
        }, this);
        this.$('table').addClass('floated-header');
      }

    }

  });

});