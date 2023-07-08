import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardComponent } from './leaderboard.component';
import { HttpClientModule } from '@angular/common/http';

describe('LeaderboardComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
