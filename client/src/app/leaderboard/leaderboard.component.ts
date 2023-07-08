import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Data } from '../interfaces/Data';
import { View } from '../interfaces/View';
import { Scope } from '../interfaces/Scope';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
})
export class LeaderboardComponent {
  public view: View = 'github';
  public scope: Scope = 'month';
  public data: Data[] | null = null;
  constructor(private dataService: ApiServiceService) {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      this.sortWrapper();
    });
  }
  public setView(view: View) {
    this.view = view;
    this.sortWrapper();
  }
  public setScope(scope: Scope) {
    this.scope = scope;
    this.sortWrapper();
  }

  private sortWrapper() {
    switch (this.view) {
      case 'github':
        this.sortGithub();
        break;
      case 'youtube':
        this.sortYoutube();
        break;
      case 'crowdin':
        this.sortCrowdin();
        break;
      case 'forum':
        this.sortForum();
        break;
      case 'news':
        this.sortNews();
        break;
    }
  }

  private sortGithub() {
    if (!this.data) {
      return;
    }
    this.data.sort(
      (a, b) =>
        b.github[this.scope].pulls * 2 +
        b.github[this.scope].issues -
        (a.github[this.scope].pulls * 2 + a.github[this.scope].issues)
    );
  }

  private sortForum() {
    if (!this.data) {
      return;
    }
    this.data.sort(
      (a, b) =>
        b.forum[this.scope].solutions * 3 +
        b.forum[this.scope].likes -
        (a.forum[this.scope].solutions * 3 + a.forum[this.scope].likes)
    );
  }

  private sortCrowdin() {
    if (!this.data) {
      return;
    }
    this.data.sort(
      (a, b) => b.crowdin[this.scope].strings - a.crowdin[this.scope].strings
    );
  }

  private sortYoutube() {
    if (!this.data) {
      return;
    }
    this.data.sort(
      (a, b) => b.youtube[this.scope].hours - a.youtube[this.scope].hours
    );
  }

  private sortNews() {
    if (!this.data) {
      return;
    }
    this.data.sort(
      (a, b) =>
        b.news[this.scope].fullbooks * 5 +
        b.news[this.scope].handbooks * 3 +
        b.news[this.scope].articles -
        (a.news[this.scope].fullbooks * 5 +
          a.news[this.scope].handbooks * 3 +
          a.news[this.scope].articles)
    );
  }
}
