import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from '../../../../data/categories';
import {SUBCATEGORIES} from '../../../../data/subcategories';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  categories = CATEGORIES;
  subcategories = SUBCATEGORIES;

  selectedCategory = 1;
  constructor(private router: Router) { }

  changeCategory(newValue) {
    this.selectedCategory = newValue;
  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f);
    localStorage.setItem('categoriaForm', f.value.categoria);
    localStorage.setItem('subcategoriaForm', f.value.subcategoria);
    localStorage.setItem('altoForm', f.value.alto);
    localStorage.setItem('pesoForm', f.value.peso);
    localStorage.setItem('anchoForm', f.value.ancho);
    localStorage.setItem('largoForm', f.value.largo);
    this.router.navigateByUrl('/user/nueva-orden/2');
  }

}
