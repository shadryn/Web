import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class GuildRosterService {
  constructor (private http: Http) {}

  private _grUrl = 'https://api.nobreaksguild.com/v1/guild/No%20Breaks/raiders';  // URL to web api

  getRoster() {

    return this.http.get(this._grUrl)
             .map((res:Response) => res.json())
  }

}
