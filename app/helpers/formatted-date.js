/* global moment:true */

import Ember from 'ember';

export function formattedDate(options) {
  return moment(options[0]).format(options[1]);
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
