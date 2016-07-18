import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  setupController: function() {
    $(document).ready(() => {
      let listSlideshow = $("#bear-sayings");
      let listItems = listSlideshow.children('li');
      let listLen = listItems.length;
      let i = 0;

      function changeList() {
        listItems.eq(i).fadeOut(300, function() {
          i += 1;
          if (i === listLen) {
            i = 0;
          }
          listItems.eq(i).fadeIn(300);
        });
      }

      listItems.not(':first').hide();
      setInterval(changeList, 6000);
    });
  }
});
