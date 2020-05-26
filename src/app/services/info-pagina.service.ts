import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // puede hacer REST
import { InfoPagina } from '../interfaces/info-pagina.interface';

// inyecta en un nivel
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    console.log('Servicio de pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
      // leer archivo json, antes permitir http
      this.http.get('assets/data/data-pagina.json') // no lo ejecuta hasta que suscriba
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        // console.log(resp);
        // console.log(resp['twiter']);
      });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-3549d.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) => {
      this.equipo = resp;
      // console.log(resp);
    });
  }




}
