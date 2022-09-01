import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "http://localhost:3000/noticias"

  constructor(private httpClient: HttpClient) { }
}
