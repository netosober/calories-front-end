/* global moment:true */

import Ember from 'ember';

export function formattedDate(date, format) {
  return moment(date).format(format);
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
