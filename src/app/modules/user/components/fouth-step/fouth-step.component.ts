import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fouth-step',
  templateUrl: './fouth-step.component.html',
  styleUrls: ['./fouth-step.component.scss']
})
export class FouthStepComponent implements OnInit {
  categoria = '';
  subcategoria = '';
  alto = '';
  peso = '';
  ancho = '';
  largo = '';
  ubicacion = '';
  dias = '';
  comentarios = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.categoria = localStorage.getItem('categoriaForm');
    this.subcategoria = localStorage.getItem('subcategoriaForm');
    this.alto = localStorage.getItem('altoForm');
    this.peso = localStorage.getItem('pesoForm');
    this.ancho = localStorage.getItem('anchoForm');
    this.largo = localStorage.getItem('largoForm');
    this.ubicacion = localStorage.getItem('ubicacionForm');
    this.dias = JSON.parse(localStorage.getItem('diasForm'));
    this.comentarios = localStorage.getItem('comentariosExtraForm');



    this.router.navigateByUrl('/user');
  }

}
