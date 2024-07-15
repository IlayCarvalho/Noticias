import { Routes } from '@angular/router';
import { ListaNoticiaComponent } from './components/pages/lista-noticia/lista-noticia.component';
import { CriarNoticiaComponent } from './components/pages/criar-noticia/criar-noticia.component';
import { ListaNoticiaDetalhesComponent } from './components/pages/lista-noticia-detalhes/lista-noticia-detalhes.component';

export const routes: Routes = [
    {path: "lista/noticia", component: ListaNoticiaComponent},
    {path: "criar/noticia", component: CriarNoticiaComponent},
    {path: "detalhes/noticia", component: ListaNoticiaDetalhesComponent}
];
