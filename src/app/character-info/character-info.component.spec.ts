import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInfoComponent } from './character-info.component';

describe('CharacterInfoComponent', () => {
  let component: CharacterInfoComponent;
  let fixture: ComponentFixture<CharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have text inputs corresponding to the character informations', () => {
    const textInputs = fixture.nativeElement.querySelectorAll('app-text-input');
    expect(textInputs.length).toBe(5);
  });
});
