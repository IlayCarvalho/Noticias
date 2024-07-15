import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  protected url: string = "http://localhost:8080/api/blog"

  constructor(private http: HttpClient) { }

  public listaNoticia(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.url)
  }

  public buscaNoticia(id: number): Observable<Noticia> {

    const urlp: string = `${this.url}/${id}`

    return this.http.get<Noticia>(urlp)
  }

  public criarNoticia(noticia: Noticia): Observable<Noticia> {
    return this.http.post<Noticia>(this.url, noticia)
  }
}
