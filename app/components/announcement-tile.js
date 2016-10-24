import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnnouncement2(announcement, params){
      this.sendAction('updateAnnouncement3', announcement, params);
      
    },
    delete(announcement){
      if(confirm("are you sure you want to delete this message to your users?")){
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
