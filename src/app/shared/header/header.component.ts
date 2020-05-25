import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // para poder utilizar el servicio
  constructor(public infoPaginaService: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
