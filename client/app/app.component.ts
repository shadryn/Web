import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { GuildService } from './services/guild/guild';
// import { HomeComponent } from './components/home/home';

@Component({
  selector: 'no-breaks',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    GuildService
  ]
})
@RouteConfig([
  {
    path: '/:sectionKey',
    name: 'Home',
    component: AppComponent,
    useAsDefault: true
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}
