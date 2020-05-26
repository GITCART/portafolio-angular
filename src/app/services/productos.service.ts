import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInteface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;

  productos: ProductoInteface[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-3549d.firebaseio.com/productos_idx.json')
    .subscribe((resp: ProductoInteface[]) => {
      console.log(resp);
      this.productos = resp;
      this.cargando = false;
    });
  }
}
