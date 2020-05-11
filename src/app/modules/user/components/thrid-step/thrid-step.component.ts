import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from '../../../../data/categories';
import {SUBCATEGORIES} from '../../../../data/subcategories';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thrid-step',
  templateUrl: './thrid-step.component.html',
  styleUrls: ['./thrid-step.component.scss']
})
export class ThridStepComponent implements OnInit {
  formCategoriaId = '';
  formSubCategoriaId = '';
  formCategoria = '';
  formSubCategoria = '';
  categories = CATEGORIES;
  subcategories = SUBCATEGORIES;
  peso = '';
  direccion = '';
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.formCategoriaId = localStorage.getItem('categoriaForm');

    this.categories.forEach(category => {
        if (category.id.toString() === this.formCategoriaId) {
          this.formCategoria =  category.nombre;
        }
    });

    this.formSubCategoriaId = localStorage.getItem('subcategoriaForm');

    this.subcategories.forEach(subcategory => {
      if (subcategory.id.toString() === this.formSubCategoriaId) {
        this.formSubCategoria =  subcategory.nombre;
      }
    });

    this.peso = localStorage.getItem('pesoForm');

    this.direccion = localStorage.getItem('ubicacionForm');
  }


  onSubmit(f: NgForm) {
    console.log(f.value);
    localStorage.setItem('comentariosExtraForm', f.value['comentarios-extra']);
    this.router.navigateByUrl('/user/nueva-orden/4');
  }
}
