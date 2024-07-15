import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarNoticiasComponent } from './atualizar-noticias.component';

describe('AtualizarNoticiasComponent', () => {
  let component: AtualizarNoticiasComponent;
  let fixture: ComponentFixture<AtualizarNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
