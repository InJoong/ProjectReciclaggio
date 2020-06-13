import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {AuthService} from '../../../../services/auth.service';

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
  dias = [];
  comentarios = '';

  constructor(private router: Router, private api: ApiService, private auth: AuthService) { }

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
    this.dias = (localStorage.getItem('diasForm')).split(',');
    this.comentarios = localStorage.getItem('comentariosExtraForm');


    const userId = this.auth.userProfile$.source['value'].sub;
    this.api.postOrder$(this.categoria, this.subcategoria, this.alto, this.peso, this.ancho, this.largo,
      this.ubicacion, this.dias, this.comentarios, userId).subscribe(
      res => console.log(res)
    );


    this.router.navigateByUrl('/user');
  }

}
