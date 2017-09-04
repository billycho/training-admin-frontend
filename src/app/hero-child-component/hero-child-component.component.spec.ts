import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroChildComponentComponent } from './hero-child-component.component';

describe('HeroChildComponentComponent', () => {
  let component: HeroChildComponentComponent;
  let fixture: ComponentFixture<HeroChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
