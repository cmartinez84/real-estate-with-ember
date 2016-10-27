import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewReview(){
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content'),
        rental: this.get('rental')
      };
      this.sendAction('saveReview', params);
    }
  }
});
