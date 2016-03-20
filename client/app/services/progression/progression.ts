import {Injectable} from 'angular2/core';
import {Boss} from '../../interfaces/boss';
import {BOSSES} from './mock-progression';
@Injectable()
export class ProgressionService {
  getBosses() {
    console.log('bosses', BOSSES);
    return Promise.resolve(BOSSES);
  }

  getBoss(id: number) {
    return Promise.resolve(BOSSES).then(
      bosses => bosses.filter(boss => boss.id === id)[0]
    );
  }
}
