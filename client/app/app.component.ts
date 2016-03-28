import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './components/home/home';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {GuildRosterService} from './services/guildroster/guildroster.service';

@Component({
  selector: 'no-breaks',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
    require('./app.component.css'),
    require('./bear-font.css')
  ],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, GuildRosterService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/:sectionKey',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
