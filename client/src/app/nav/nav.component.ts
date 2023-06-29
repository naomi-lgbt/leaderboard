import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  public shouldRender = false;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      console.log(router.url);
      this.shouldRender = router.url !== '/';
    });
  }
}
