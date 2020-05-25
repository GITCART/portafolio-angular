import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { AppRoutingModule } from './app-routing.module';

// servicios
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
  ], // componentes
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // permite el crud, servidores REST
  ], // servicios antiguamente
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
