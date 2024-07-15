import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NoticiaService } from '../../services/noticia.service';
import { Noticia } from '../../Noticia';
import { CardNoticiaComponent } from '../card-noticia/card-noticia.component';

@Component({
  selector: 'app-lista-noticia',
  standalone: true,
  imports: [
    CardNoticiaComponent,
    NgFor
],
  templateUrl: './lista-noticia.component.html',
  styleUrl: './lista-noticia.component.css'
})
export class ListaNoticiaComponent {

  protected listaNoticias: Noticia[] = [];

  constructor( private serviceNoticia: NoticiaService ){
    this.listandoNoticia();
  };

  listandoNoticia(){
    this.serviceNoticia.listaNoticia().subscribe(lista => this.listaNoticias = lista);
  };

}
