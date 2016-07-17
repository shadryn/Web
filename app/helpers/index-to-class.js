import Ember from 'ember';
import { CLASS_MAP } from '../const';

export function indexToClass(params) {
  if(params[1]) {
    return CLASS_MAP[params[0]].toLowerCase();
  }

  return CLASS_MAP[params[0]];
}

export default Ember.Helper.helper(indexToClass);
