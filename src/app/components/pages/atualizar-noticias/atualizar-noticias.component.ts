import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Noticia } from '../../../Noticia';
import { NoticiaService } from '../../../services/noticia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-atualizar-noticias',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './atualizar-noticias.component.html',
  styleUrl: './atualizar-noticias.component.css'
})
export class AtualizarNoticiasComponent {

  protected formBuilder = inject(FormBuilder)

  protected dados: Noticia = {
    id: 0,
    titulo: '',
    descricao: '',
  }

  protected formAtualizar = this.formBuilder.group({
    titulo: ['', Validators.required],
    descricao: ['', Validators.required]
  })

  constructor( 
    private editarPostService: NoticiaService, 
    private router: Router, 
    private routes: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.routes.snapshot.paramMap.get("id"));

    this.editarPostService.buscaNoticia(id).subscribe(noticia => this.dados = noticia);
  }

  async editar() {

    if(this.formAtualizar.invalid) {
      return ;
    };

    const dadosNoticia = {
      titulo: this.formAtualizar.value.titulo!,
      descricao: this.formAtualizar.value.descricao!,
    };

    const id: number = Number(this.routes.snapshot.paramMap.get("id"));

    await this.editarPostService.atualizarNoticia(id, dadosNoticia).subscribe(() => {
      this.router.navigate(['/'])
    })

  }

}
