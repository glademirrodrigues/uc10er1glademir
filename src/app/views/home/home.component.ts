import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/models/noticias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(noticiaService: noticiaService) { }
listaNoticias = [] as Noticia[]

  ngOnInit(): void {
    this.carregarNoticias ()
    }

    carregarNoticias() {
      this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[])) => {
        this.listaNoticias = noticiasRecebidas;
        console.log (this.listaNoticias);
      }
    }

}

