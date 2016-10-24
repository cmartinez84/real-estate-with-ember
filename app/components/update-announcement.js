import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm(){
      this.set('updateAnnouncementForm', true);
    },
    updateAnnouncement(announcement){
      
      var params = {
        message: this.get('message'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('updateAnnouncement2', announcement, params);
    }
  }
});
