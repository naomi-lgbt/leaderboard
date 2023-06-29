import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { LogoComponent } from '../logo/logo.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent, LogoComponent],
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.shouldRender).toBeDefined();
  });

  it('should not render the navigation bar by default', () => {
    const nav = compiled.querySelector('nav');
    expect(nav).toBeNull();
  });

  it('should render when shouldRender is true', () => {
    component.shouldRender = true;
    fixture.detectChanges();
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should display the logo', () => {
    component.shouldRender = true;
    fixture.detectChanges();
    const logo = compiled.querySelector('svg');
    expect(logo).toBeTruthy();
  });

  it('should render the navigation links', () => {
    component.shouldRender = true;
    fixture.detectChanges();
    const links = compiled.querySelectorAll('a');
    expect(links.length).toBe(2);
    expect(links[0]?.textContent).toContain('Leaderboard');
    expect(links[0]?.getAttribute('routerLink')).toBe('/leaderboard');
    expect(links[1]?.textContent).toContain('Profile');
    expect(links[1]?.getAttribute('routerLink')).toBe('/profile');
  });
});
