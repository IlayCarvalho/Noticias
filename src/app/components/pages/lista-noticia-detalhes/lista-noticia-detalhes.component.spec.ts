import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNoticiaDetalhesComponent } from './lista-noticia-detalhes.component';

describe('ListaNoticiaDetalhesComponent', () => {
  let component: ListaNoticiaDetalhesComponent;
  let fixture: ComponentFixture<ListaNoticiaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNoticiaDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNoticiaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
