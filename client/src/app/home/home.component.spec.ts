import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LogoComponent } from '../logo/logo.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, LogoComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo', () => {
    const logo = compiled.querySelector('svg');
    expect(logo).toBeTruthy();
  });

  it('should display the title', () => {
    const title = compiled.querySelector('h1');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain(
      'freeCodeCamp Contributor Leaderboard'
    );
  });

  it('should render the introduction text', () => {
    const texts = compiled.querySelectorAll('p');
    expect(texts.length).toBe(3);
  });

  it('should render a link to the leaderboard', () => {
    const link = compiled.querySelector('a');
    expect(link).toBeTruthy();
    expect(link?.textContent).toContain('View the Leaderboard');
    expect(link?.getAttribute('routerLink')).toBe('/leaderboard');
  });
});
