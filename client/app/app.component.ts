import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'no-breaks',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
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
