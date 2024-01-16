import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CanserberoComponent } from './canserbero/canserbero.component';
import { AnatomiaComponent } from './anatomia/anatomia.component';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CabezaanatomiaComponent } from './cabezaanatomia/cabezaanatomia.component';
import { PiesComponent } from './pies/pies.component';
import { PiesanatomicoComponent } from './piesanatomico/piesanatomico.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { CuerpoanatomicoComponent } from './cuerpoanatomico/cuerpoanatomico.component';
import { ColaComponent } from './cola/cola.component';
import { ColaanatomicaComponent } from './colaanatomica/colaanatomica.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CanserberoComponent,AnatomiaComponent,CabezaComponent, CabezaanatomiaComponent,PiesComponent, PiesanatomicoComponent, CuerpoComponent, CuerpoanatomicoComponent, ColaComponent, ColaanatomicaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cancerbero';
}
