import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement){
      if(confirm("are you sure you want to delete this message to your users?")){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
