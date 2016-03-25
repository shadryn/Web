import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'the-guild',
  moduleId: 'components/the-guild/the-guild',
  template: require('./the-guild.html'),
  styles: [require('./the-guild.scss')]
})
export class TheGuildComponent implements OnInit {
  constructor(
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let sectionKey = this._routeParams.get('sectionKey');
    console.log(sectionKey);
  }
}
$(function () {
    var list_slideshow = $("#bear-sayings"),
        listItems = list_slideshow.children('li'),
        listLen = listItems.length,
        i = 0,
        randomNum = function() {
        	return Math.floor(Math.random() * listLen);
        },
        changeList = function () {
            listItems.eq(i).fadeOut(300, function () {
                i = randomNum();
                listItems.eq(i).fadeIn(300);
            });
        };
    listItems.not(':first').hide();
    setInterval(changeList, 5000);
});
