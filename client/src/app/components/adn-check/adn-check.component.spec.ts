import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnCheckComponent } from './adn-check.component';

describe('AdnCheckComponent', () => {
  let component: AdnCheckComponent;
  let fixture: ComponentFixture<AdnCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdnCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
