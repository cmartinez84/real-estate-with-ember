import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement'),
    });
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveAnnouncement3(params){
      var newAnnouncement = this.store.createRecord('announcement', params);

      newAnnouncement.save();
      this.transitionTo('index');
    },
    updateAnnouncement3(announcement, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!== undefined){
          announcement.set(key, params[key]);
        }
      });
      announcement.save();
      this.transitionTo('index');
    },
    destroyAnnouncement(announcement){
      announcement.destroyRecord();

      this.transitionTo('index');
    }
  }
});
