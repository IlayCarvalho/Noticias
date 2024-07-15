import { Routes } from '@angular/router';
import { CriarNoticiaComponent } from './components/pages/criar-noticia/criar-noticia.component';
import { ListaNoticiaComponent } from './components/lista-noticia/lista-noticia.component';
import { ListaNoticiaDetalhesComponent } from './components/lista-noticia-detalhes/lista-noticia-detalhes.component';

export const routes: Routes = [
    {path: "", component: ListaNoticiaComponent},
    {path: "criar/noticia", component: CriarNoticiaComponent},
    {path: "detalhes/noticia/:id", component: ListaNoticiaDetalhesComponent}
];
