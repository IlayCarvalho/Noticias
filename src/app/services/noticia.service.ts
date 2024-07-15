import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  protected url: string = "http://localhost:3000/noticias"

  constructor(private http: HttpClient) { }

  public listaNoticia():Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.url)
  }
}
