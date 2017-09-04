import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroParentComponentComponent } from './hero-parent-component.component';

describe('HeroParentComponentComponent', () => {
  let component: HeroParentComponentComponent;
  let fixture: ComponentFixture<HeroParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
