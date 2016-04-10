import { Component, OnInit } from 'angular2/core';
import { Location, RouteParams } from 'angular2/router';
import { TheGuildComponent } from '../the-guild/the-guild';
import { RaidingComponent } from '../raiding/raiding';
import { EventsComponent } from '../events/events';
import { JoinComponent } from '../join/join';
import { GuildRosterComponent } from '../guildroster/guildroster';

@Component({
  selector: 'home',
  moduleId: 'components/home/home',
  template: require('./home.html'),
  styles: [require('./home.scss')],
  directives: [
    TheGuildComponent,
    RaidingComponent,
    EventsComponent,
    GuildRosterComponent,
    JoinComponent
  ]
})
export class HomeComponent implements OnInit {
  activePage: '';
  showHomeLogo: boolean;
  stickyTop: boolean;
  scrollTop: number;

  constructor(
    private _location: Location,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    this.scrollTop = $(window).scrollTop();
    this.showHomeLogo = (this.scrollTop < 649);
    let sectionKey = this._routeParams.get('sectionKey');

    if (['guild', 'raiding', 'logs', 'twitch', 'events', 'join'].indexOf(sectionKey) > -1) {
      this.showHomeLogo = false;
      this.goToPage(sectionKey);
    }

    $(window).scroll(() => {
      this.scrollTop = $(window).scrollTop();
      this.stickyTop = (this.scrollTop >= 700) ? true : false;
      this.showHomeLogo = (this.scrollTop < 649);
    });
  }

  goToPage(page) {
    this.activePage = page;
    this._location.go(page);
    $('html, body').animate({scrollTop: $('#' + page).offset().top - 51 }, 500);
  }
}
