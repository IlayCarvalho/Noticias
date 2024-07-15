import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../Noticia';
import { NoticiaService } from '../../services/noticia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-noticia-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './lista-noticia-detalhes.component.html',
  styleUrl: './lista-noticia-detalhes.component.css'
})
export class ListaNoticiaDetalhesComponent implements OnInit {

  protected dados: Noticia = {
    id: 0,
    titulo: '',
    descricao: '',
  }

 constructor(private service: NoticiaService, private routes: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get("id"))

    console.log(id)

    this.service.buscaNoticia(id).subscribe(dado => this.dados = dado)
 }

}
