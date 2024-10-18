import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetaleComponent } from './userdetale.component';

describe('UserdetaleComponent', () => {
  let component: UserdetaleComponent;
  let fixture: ComponentFixture<UserdetaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserdetaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserdetaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
