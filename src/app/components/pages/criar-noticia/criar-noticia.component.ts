import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticiaService } from '../../../services/noticia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-noticia',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './criar-noticia.component.html',
  styleUrl: './criar-noticia.component.css'
})
export class CriarNoticiaComponent {

  protected formBuilder = inject(FormBuilder)

  protected form = this.formBuilder.group({
    titulo: ['', Validators.required],
    descricao: ['', Validators.required]
  })

  constructor(private service: NoticiaService, private router: Router) {}

  async cadastrar() {
    if (this.form.invalid) {
      return ;
    }

    const dadosNoticia = {
      titulo: this.form.value.titulo!,
      descricao: this.form.value.descricao!
    }

    await this.service.criarNoticia(dadosNoticia).subscribe(() => {
      this.router.navigate(["/"])
    })

  }

}
