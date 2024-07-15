import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-noticia',
  standalone: true,
  imports: [
    RouterLink
   ],
  templateUrl: './card-noticia.component.html',
  styleUrl: './card-noticia.component.css'
})
export class CardNoticiaComponent {

  @Input() id: number = 0;
  @Input() titulo: string ='';
  @Input() descricao: string = '';
}
