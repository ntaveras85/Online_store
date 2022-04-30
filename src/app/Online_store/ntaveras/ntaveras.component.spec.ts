import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtaverasComponent } from './ntaveras.component';

describe('NtaverasComponent', () => {
  let component: NtaverasComponent;
  let fixture: ComponentFixture<NtaverasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtaverasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NtaverasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
