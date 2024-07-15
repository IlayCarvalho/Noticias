import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../Noticia';
import { NoticiaService } from '../../services/noticia.service';
import { ActivatedRoute, Router } from '@angular/router';

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

 constructor(private service: NoticiaService, private routes: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get("id"))


    this.service.buscaNoticia(id).subscribe(dado => this.dados = dado)
 }

 async excluir(id: number) {
  
  await this.service.deletarNoticia(id).subscribe(() => {
    this.router.navigate(["/"])
  })
 }

}
