import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceexampleComponent } from './serviceexample.component';

describe('ServiceexampleComponent', () => {
  let component: ServiceexampleComponent;
  let fixture: ComponentFixture<ServiceexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
