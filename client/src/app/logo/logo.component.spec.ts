import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
    });
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.width).toBeDefined();
  });

  it('should default to a width of 500', () => {
    const logo = compiled.querySelector('svg');
    expect(logo?.getAttribute('width')).toBe('500');
  });

  it('should accept a custom width', () => {
    component.width = 100;
    fixture.detectChanges();
    const logo = compiled.querySelector('svg');
    expect(logo?.getAttribute('width')).toBe('100');
  });
});
