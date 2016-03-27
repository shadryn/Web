import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {GuildRosterService}       from './components/guildroster/guildroster.service';
bootstrap(AppComponent,[
  HTTP_PROVIDERS,
  GuildRosterService
]);
