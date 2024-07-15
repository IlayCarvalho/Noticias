import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardNoticiaComponent } from "../../card-noticia/card-noticia.component";

@Component({
  selector: 'app-lista-noticia',
  standalone: true,
  imports: [
    CardNoticiaComponent
],
  templateUrl: './lista-noticia.component.html',
  styleUrl: './lista-noticia.component.css'
})
export class ListaNoticiaComponent {

}
